export const learnSections = [
  {
    id: 'what-is',
    title: 'What Is Prompt Injection?',
    content: `Prompt injection is a technique where an attacker crafts input that manipulates an AI model into ignoring its original instructions or behaving in an unintended way. It's similar in spirit to SQL injection — instead of injecting malicious code into a database query, the attacker injects malicious instructions into a text prompt.

Because large language models process instructions and user data in the same text stream, it can be difficult for the model to reliably distinguish "trusted" instructions from "untrusted" user input — which is exactly what these attacks exploit.`,
  },
  {
    id: 'real-world',
    title: 'Real-World Incidents',
    content: `Several real incidents have highlighted this risk. Early chatbot deployments were tricked into revealing their system prompts simply by being asked directly. Some AI-powered browser and email assistants have been shown to follow instructions hidden inside web pages or documents they were asked to summarize — a class of attack known as "indirect prompt injection."

These incidents show that prompt injection isn't just a theoretical risk — it affects real deployed systems, especially ones that read untrusted external content like websites or emails.`,
  },
  {
    id: 'owasp',
    title: 'OWASP LLM Top 10',
    content: `The OWASP Foundation maintains a "Top 10 for Large Language Model Applications" list, similar to their well-known web application Top 10. Prompt Injection sits at the top of that list (LLM01), reflecting how foundational and high-impact this risk category is.

Other related categories include Insecure Output Handling, Sensitive Information Disclosure, and Excessive Agency — many of which compound the impact of a successful prompt injection attack.`,
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    content: `No single defense fully solves prompt injection — the current best practice is layered defense (also called "defense in depth"):

- Clearly separate trusted instructions from untrusted user input (e.g. using delimiters or structured formatting)
- Filter and validate input for known attack patterns
- Filter model output before it reaches the user or triggers an action
- Limit what the model is allowed to do (minimize "agency") when handling untrusted input
- Monitor and log unusual model behavior for review

Try combining these in the Playground to see how layering defenses changes the outcome.`,
  },
  {
    id: 'references',
    title: 'References',
    content: `• OWASP Top 10 for Large Language Model Applications — owasp.org
- NIST AI Risk Management Framework — nist.gov
- Simon Willison's writing on prompt injection (one of the earliest and clearest public explanations)
- Various LLM provider security documentation (OpenAI, Anthropic, Google)

This project is for educational purposes — always refer to official sources for the most current guidance.`,
  },
]