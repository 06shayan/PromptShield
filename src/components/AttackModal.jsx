import { X, AlertTriangle, Globe, Terminal, Shield, Gauge, ShieldCheck } from 'lucide-react'
import SeverityBadge from './SeverityBadge.jsx'

function AttackModal({ attack, onClose }) {
  if (!attack) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 text-blue-400">
            <AlertTriangle size={22} />
            <h2 className="text-xl font-bold text-white">{attack.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <SeverityBadge severity={attack.severity} />
          <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
            {attack.difficulty}
          </span>
          <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
            {attack.owaspCategory}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1.5">
              <Terminal size={12} /> Definition
            </p>
            <p className="text-sm text-slate-300">{attack.description}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1.5">
              <Globe size={12} /> Real World Example
            </p>
            <p className="text-sm text-slate-300">{attack.realWorldExample}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Example Prompt</p>
            <pre className="text-sm text-slate-300 bg-slate-950 border border-slate-800 rounded-lg p-3 whitespace-pre-wrap font-mono">
              {attack.examplePrompt}
            </pre>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1 flex items-center gap-1.5">
              <Gauge size={12} /> Typical Impact
            </p>
            <p className="text-sm text-slate-300">{attack.typicalImpact}</p>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
            <p className="text-xs font-semibold text-emerald-400 uppercase mb-1 flex items-center gap-1.5">
              <ShieldCheck size={12} /> Mitigation
            </p>
            <p className="text-sm text-slate-300">{attack.mitigation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttackModal