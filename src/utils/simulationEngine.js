import { defenses as allDefenses } from '../data/defenses.js'

// Simulates running an attack prompt through a defense pipeline.
// This is NOT a real AI model — it's a rule-based simulation for education.

const OUTPUT_FILTER_CATCHES = ['prompt-leak', 'data-extraction']

export function runSimulation(attack, prompt, selectedDefenseIds) {
  const promptLower = prompt.toLowerCase()
  const matchedPhrase = attack.triggerPhrases.find((phrase) =>
    promptLower.includes(phrase)
  )

  const getDefense = (id) => allDefenses.find((d) => d.id === id)

  const pipeline = []
  let blocked = false
  let blockedAt = null
  let protectedPrompt = prompt
  const transformationSteps = [{ label: 'Original Prompt', prompt }]

  pipeline.push({ stage: 'Input Validation (basic)', status: 'passed' })

  // Order matters: this is the order defenses would realistically run in
  const stageOrder = [
    'input-validation',
    'prompt-sanitization',
    'prompt-delimiters',
    'role-separation',
    'context-isolation',
    'keyword-filter',
  ]

  for (const defId of stageOrder) {
    if (blocked || !selectedDefenseIds.includes(defId)) continue
    const defense = getDefense(defId)

    if (defId === 'prompt-delimiters') {
      protectedPrompt = `<USER_INPUT>\n${protectedPrompt}\n</USER_INPUT>`
      transformationSteps.push({ label: 'After Prompt Delimiters', prompt: protectedPrompt })
      pipeline.push({
        stage: defense.name,
        status: 'applied',
        note: 'User input wrapped in delimiters to separate it from instructions.',
      })
      continue
    }

    if (defId === 'prompt-sanitization') {
      if (matchedPhrase) {
        const redacted = protectedPrompt.replace(
          new RegExp(matchedPhrase, 'i'),
          '[Instruction Removed]'
        )
        if (redacted !== protectedPrompt) {
          protectedPrompt = redacted
          transformationSteps.push({ label: 'After Sanitization', prompt: protectedPrompt })
        }
      }
      // sanitization can still separately block role/context-based attacks below,
      // so we don't `continue` here — let it fall through to the blocksAttacks check
    }

    if (defId === 'keyword-filter') {
      if (matchedPhrase) {
        pipeline.push({
          stage: defense.name,
          status: 'blocked',
          note: `Detected known malicious phrase: "${matchedPhrase}"`,
        })
        blocked = true
        blockedAt = defense.name
      } else {
        pipeline.push({ stage: defense.name, status: 'passed' })
      }
      continue
    }

    // Defenses driven by the blocksAttacks field (sanitization, input-validation, role-separation, context-isolation)
    if (defense.blocksAttacks?.includes(attack.id)) {
      pipeline.push({
        stage: defense.name,
        status: 'blocked',
        note: `${defense.name} specifically detects and stops ${attack.name} patterns.`,
      })
      blocked = true
      blockedAt = defense.name
    } else {
      pipeline.push({ stage: defense.name, status: 'passed' })
    }
  }

  if (!blocked) {
    pipeline.push({ stage: 'LLM', status: 'processed' })
  }

  if (!blocked && selectedDefenseIds.includes('output-filter')) {
    if (OUTPUT_FILTER_CATCHES.includes(attack.id)) {
      pipeline.push({
        stage: 'Output Filtering',
        status: 'blocked',
        note: 'Detected sensitive or leaked content in the model output.',
      })
      blocked = true
      blockedAt = 'Output Filtering'
    } else {
      pipeline.push({ stage: 'Output Filtering', status: 'passed' })
    }
  }

  // Suggest defenses that WOULD have stopped this attack, that weren't selected
  const wouldHaveBlocked = allDefenses
    .filter((d) => {
      if (d.id === 'keyword-filter') return Boolean(matchedPhrase)
      if (d.id === 'output-filter') return OUTPUT_FILTER_CATCHES.includes(attack.id)
      return d.blocksAttacks?.includes(attack.id)
    })
    .map((d) => d.id)
    .filter((id) => !selectedDefenseIds.includes(id))

  return {
    attackSucceeded: !blocked,
    blockedAt,
    matchedPhrase: matchedPhrase || null,
    pipeline,
    originalPrompt: prompt,
    protectedPrompt,
    transformationSteps,
    reason: blocked
      ? `Blocked by ${blockedAt}.`
      : 'No selected defense was able to detect or stop this attack pattern.',
    recommendedDefenses: blocked ? [] : wouldHaveBlocked,
    confidence: blocked ? 92 : 78,
  }
}