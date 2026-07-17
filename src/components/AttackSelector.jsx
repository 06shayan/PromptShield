import { attacks } from '../data/attacks.js'

function AttackSelector({ selectedAttackId, onSelect }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-3">1. Choose an Attack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {attacks.map((attack) => (
          <button
            key={attack.id}
            onClick={() => onSelect(attack)}
            className={`text-left p-4 rounded-lg border transition-colors ${
              selectedAttackId === attack.id
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-slate-800 bg-slate-900 hover:border-slate-700'
            }`}
          >
            <p className="font-medium text-white text-sm">{attack.name}</p>
            <p className="text-xs text-slate-500 mt-1">{attack.severity}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default AttackSelector