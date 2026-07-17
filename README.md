# 🛡️ PromptShield

**A Prompt Injection Playground & Defense Toolkit**

PromptShield is an interactive cybersecurity learning lab for understanding how prompt injection attacks work, why they succeed, and how real-world defense mechanisms stop them — without calling a real AI model.

Inspired by tools like OWASP Juice Shop, PromptShield teaches AI security concepts through hands-on simulation rather than passive reading.

> ⚠️ This is an educational simulation, not a production security product. All "attacks" and "defenses" are rule-based simulations for learning purposes.

---

## ✨ Features

- **Interactive Playground** — choose an attack, edit the prompt, select defenses, and run a simulation
- **Rule-based Simulation Engine** — models how real defenses (keyword filtering, prompt delimiters, sanitization, role separation, context isolation, output filtering) actually behave, including their blind spots
- **Step-by-Step Prompt Transformation** — visually see how each defense modifies the prompt in real time
- **Animated Security Scan** — a Microsoft Defender–style scanning sequence before results are revealed
- **Full Security Report** — attack summary, defense pipeline visualization, and recommended defenses for any attack that succeeds
- **Attack Library** — 8 documented prompt injection techniques (Instruction Override, Prompt Leak, Jailbreak, Role Confusion, Data Extraction, Tool Misuse, Indirect Prompt Injection, Context Manipulation), each with real-world examples and mitigations
- **Defense Library** — 7 documented defense mechanisms with advantages and limitations
- **Learn Page** — knowledge base covering prompt injection fundamentals, real-world incidents, the OWASP LLM Top 10, and best practices

---

## 🖥️ Tech Stack

- **React** + **Vite**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Router**

Frontend-only. No backend, no database, no authentication — the entire simulation runs client-side in the browser.

---

## 🚀 Getting Started

**Prerequisites:** Node.js installed on your machine.

```bash
# Clone the repository
git clone <your-repo-url>
cd promptshield

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

---

## 📖 How It Works

1. **Choose an attack** in the Playground from the predefined library
2. **View and edit the prompt** — the example prompt auto-fills but can be modified
3. **Select one or more defenses** to apply
4. **Run the simulation** — watch the scanning sequence, then see:
   - Whether the attack succeeded or was blocked, and why
   - How the prompt was transformed by each defense, step by step
   - The full defense pipeline the prompt passed through
   - Recommended defenses if the attack got through

The goal is to make an abstract concept — *why does this defense work and that one doesn't* — visually obvious rather than something you have to read about.

---

## 📂 Project Structure

src/
├── components/     # Reusable UI components (cards, modals, selectors, results panel)
├── data/           # Attack, defense, and learning content data
├── pages/          # Top-level pages (Dashboard, Playground, Attack Library, Defense Library, Learn)
├── utils/          # Simulation engine logic
└── App.jsx         # Layout + routing outlet

---

## 🗺️ Future Enhancements

- Optional "Smart Scan" mode using a real LLM API (e.g. Gemini) for AI-based risk analysis, alongside the current rule-based "Basic Scan"
- Additional attack/defense categories
- Exportable security reports

---

## 📚 References

- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

---

## 📄 License

This project is for educational purposes.