import { AlertTriangle } from 'lucide-react'
import SeverityBadge from './SeverityBadge.jsx'

function AttackCard({ attack, onClick }) {
  return (
    <div
      onClick={() => onClick?.(attack)}
      className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 text-blue-400">
          <AlertTriangle size={18} />
          <h3 className="font-semibold text-white">{attack.name}</h3>
        </div>
        <SeverityBadge severity={attack.severity} />
      </div>

      <p className="text-sm text-slate-400 mb-4">{attack.description}</p>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{attack.owaspCategory}</span>
        <span>{attack.difficulty}</span>
      </div>
    </div>
  )
}

export default AttackCard