import { ShieldCheck } from 'lucide-react'

function DefenseCard({ defense, onClick  }) {
  return (
    
    <div
      onClick={() => onClick?.(defense)}
      className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors cursor-pointer"
    >     
     <div className="flex items-center gap-2 text-blue-400 mb-3">
        <ShieldCheck size={18} />
        <h3 className="font-semibold text-white">{defense.name}</h3>
      </div>

      <p className="text-sm text-slate-400 mb-4">{defense.description}</p>

      <div className="mb-3">
        <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Why it works</p>
        <p className="text-sm text-slate-300">{defense.whyItWorks}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div>
          <p className="text-xs font-semibold text-emerald-400 uppercase mb-1">Advantages</p>
          <ul className="text-xs text-slate-400 space-y-1">
            {defense.advantages.map((adv, i) => (
              <li key={i}>• {adv}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-orange-400 uppercase mb-1">Limitations</p>
          <ul className="text-xs text-slate-400 space-y-1">
            {defense.limitations.map((lim, i) => (
              <li key={i}>• {lim}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DefenseCard