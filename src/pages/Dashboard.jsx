import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Shield, AlertTriangle, BookOpen, PlayCircle, ArrowRight } from 'lucide-react'
import { attacks } from '../data/attacks.js'
import AttackCard from '../components/AttackCard.jsx'
import InfoCard from '../components/InfoCard.jsx'
import AttackModal from '../components/AttackModal.jsx'

function Dashboard() {
  const recentAttacks = attacks.slice(0, 3)
  const [selectedAttack, setSelectedAttack] = useState(null)

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12">
      {/* Hero */}
      <div className="text-center py-12">
        <div className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Shield size={16} />
          Prompt Injection Playground & Defense Toolkit
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Learn Prompt Injection <br /> By Breaking It
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          PromptShield is an interactive lab for understanding how prompt injection attacks work,
          why they succeed, and how real defenses stop them — no real AI model required.
        </p>
        <Link
          to="/playground"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <PlayCircle size={20} />
          Start Simulation
        </Link>
      </div>

      {/* What is prompt injection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          icon={AlertTriangle}
          title="What Is Prompt Injection?"
          description="A technique where attackers craft input designed to override or manipulate an AI model's original instructions."
        />
        <InfoCard
          icon={Shield}
          title="Why It's Dangerous"
          description="It can leak private data, bypass safety rules, or make an AI system act against its intended purpose."
        />
        <InfoCard
          icon={BookOpen}
          title="How This Lab Helps"
          description="Simulate real attack patterns and defense mechanisms to see exactly why each one succeeds or fails."
        />
      </div>

      {/* Recent attacks */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Attacks</h2>
          <Link
            to="/attacks"
            className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentAttacks.map((attack) => (
            <AttackCard key={attack.id} attack={attack} onClick={setSelectedAttack} />
          ))}
        </div>
      </div>

      {/* Learning resources */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <BookOpen size={24} className="text-blue-400" />
          <div>
            <h3 className="text-white font-semibold">Want to learn more?</h3>
            <p className="text-sm text-slate-400">Explore the OWASP LLM Top 10 and real-world incidents.</p>
          </div>
        </div>
        <Link
          to="/learn"
          className="text-sm bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go to Learn
        </Link>
      </div>
      <AttackModal attack={selectedAttack} onClose={() => setSelectedAttack(null)} />

    </div>
  )
}

export default Dashboard