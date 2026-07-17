import { defenses } from '../data/defenses.js'
import { ShieldCheck } from 'lucide-react'

function DefenseSelector({ selectedDefenseIds, onToggle }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
        <ShieldCheck size={18} className="text-blue-400" />
        3. Choose Defenses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {defenses.map((defense) => {
          const isChecked = selectedDefenseIds.includes(defense.id)
          return (
            <label
              key={defense.id}
              className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                isChecked
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-slate-800 bg-slate-900 hover:border-slate-700'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggle(defense.id)}
                className="mt-1 accent-blue-500"
              />
              <div>
                <p className="font-medium text-white text-sm">{defense.name}</p>
                <p className="text-xs text-slate-500 mt-1">{defense.description}</p>
              </div>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default DefenseSelector