import { useState, useEffect } from 'react'
import AttackSelector from '../components/AttackSelector.jsx'
import PromptEditor from '../components/PromptEditor.jsx'
import DefenseSelector from '../components/DefenseSelector.jsx'
import { runSimulation } from '../utils/simulationEngine.js'
import { Play } from 'lucide-react'
import ResultsPanel from '../components/ResultsPanel.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import ScanningLoader from '../components/ScanningLoader.jsx'

function Playground() {
  const [selectedAttack, setSelectedAttack] = useState(null)
  const [prompt, setPrompt] = useState('')
  const [selectedDefenseIds, setSelectedDefenseIds] = useState([]) 
  const [result, setResult] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [pendingResult, setPendingResult] = useState(null)

  // When a new attack is selected, we will auto-fill the prompt editor with its example
  useEffect(() => {
    if (selectedAttack) {
      setPrompt(selectedAttack.examplePrompt)
    }
  }, [selectedAttack])

  //Choose a defense strategy according to your attack
  const toggleDefense = (id) => {
    setSelectedDefenseIds((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    )
  }

  //Handler function for running simulation
  const handleRunSimulation = () => {
    if (!selectedAttack) return
    const simResult = runSimulation(selectedAttack, prompt, selectedDefenseIds)
    setPendingResult(simResult)
    setResult(null)
    setIsScanning(true)
  }

  const handleScanComplete = () => {
    setIsScanning(false)
    setResult(pendingResult)
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Playground</h1>
      <p className="text-slate-400 mb-6">Select an attack, apply defenses, and run a simulation.</p>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-6">
        <AttackSelector
          selectedAttackId={selectedAttack?.id}
          onSelect={setSelectedAttack}
        />
      </div>

      {/* {selectedAttack && (
        <div className="text-slate-400 text-sm">
          Selected: <span className="text-blue-400">{selectedAttack.name}</span>
        </div>
      )} */}

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <PromptEditor prompt={prompt} onChange={setPrompt} />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <DefenseSelector
          selectedDefenseIds={selectedDefenseIds}
          onToggle={toggleDefense}
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleRunSimulation}
          disabled={!selectedAttack || isScanning}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <Play size={18} />
          RUN SIMULATION
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isScanning && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ScanningLoader onComplete={handleScanComplete} />
          </motion.div>
        )}

        {!isScanning && result && selectedAttack && (
          <motion.div
            key={JSON.stringify(result)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ResultsPanel result={result} attack={selectedAttack} />
          </motion.div>
        )}
      </AnimatePresence>

    </div>

    
  )
}

export default Playground