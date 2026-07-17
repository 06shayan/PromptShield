import { X, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react'

function DefenseModal({ defense, onClose }) {
  if (!defense) return null

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
            <ShieldCheck size={22} />
            <h2 className="text-xl font-bold text-white">{defense.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1">What It Does</p>
            <p className="text-sm text-slate-300">{defense.description}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Why It Works</p>
            <p className="text-sm text-slate-300">{defense.whyItWorks}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase mb-2 flex items-center gap-1.5">
                <CheckCircle2 size={12} /> Advantages
              </p>
              <ul className="text-sm text-slate-300 space-y-1.5">
                {defense.advantages.map((adv, i) => (
                  <li key={i}>• {adv}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-orange-400 uppercase mb-2 flex items-center gap-1.5">
                <XCircle size={12} /> Limitations
              </p>
              <ul className="text-sm text-slate-300 space-y-1.5">
                {defense.limitations.map((lim, i) => (
                  <li key={i}>• {lim}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefenseModal