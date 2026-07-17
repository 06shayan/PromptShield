import { ShieldAlert, ShieldCheck, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import { defenses } from '../data/defenses.js'
import SeverityBadge from './SeverityBadge.jsx'

function ResultsPanel({ result, attack }) {
  const succeeded = result.attackSucceeded

  return (
    <div className="space-y-6">
      {/* Attack Summary */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Attack Summary</h2>
        <div className="flex flex-wrap gap-6 text-sm">
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1">Attack Name</p>
            <p className="text-white font-medium">{attack.name}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1">Category</p>
            <p className="text-white font-medium">{attack.owaspCategory}</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1">Severity</p>
            <SeverityBadge severity={attack.severity} />
          </div>
        </div>
      </div>

      {/* Security Report — status banner */}
      <div
        className={`rounded-xl p-6 border flex items-start gap-4 ${
          succeeded
            ? 'bg-red-500/10 border-red-500/30'
            : 'bg-emerald-500/10 border-emerald-500/30'
        }`}
      >
        {succeeded ? (
          <XCircle className="text-red-400 shrink-0" size={28} />
        ) : (
          <CheckCircle2 className="text-emerald-400 shrink-0" size={28} />
        )}
        <div>
          <p className={`text-lg font-bold ${succeeded ? 'text-red-400' : 'text-emerald-400'}`}>
            {succeeded ? 'Attack Succeeded' : 'Attack Blocked'}
          </p>
          <p className="text-sm text-slate-300 mt-1">{result.reason}</p>
          <p className="text-xs text-slate-500 mt-2">Confidence: {result.confidence}%</p>
        </div>
      </div>

{/* Prompt Transformation */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Prompt Transformation</h2>
        <div className="space-y-3">
          {result.transformationSteps.map((step, i) => (
            <div key={i}>
              {i > 0 && (
                <div className="flex justify-center text-slate-600 py-1">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              )}
              <div>
                <p className="text-xs text-slate-500 uppercase mb-1">{step.label}</p>
                <pre
                  className={`text-sm rounded-lg p-3 whitespace-pre-wrap font-mono border ${
                    i === 0
                      ? 'text-slate-300 bg-slate-950 border-slate-800'
                      : 'text-blue-300 bg-blue-500/5 border-blue-500/20'
                  }`}
                >
                  {step.prompt}
                </pre>
              </div>
            </div>
          ))}

          {!result.attackSucceeded && (
            <>
              <div className="flex justify-center text-slate-600 py-1">
                <ArrowRight size={16} className="rotate-90" />
              </div>
              <div className="text-sm text-red-400 bg-red-500/5 border border-red-500/20 rounded-lg p-3 font-mono flex items-center gap-2">
                <XCircle size={16} className="shrink-0" />
                Request blocked — prompt never reached the model.
              </div>
            </>
          )}
        </div>
      </div>

      {/* Defense Pipeline */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Defense Pipeline</h2>
        <div className="flex flex-wrap items-center gap-2">
          {result.pipeline.map((stage, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`px-3 py-2 rounded-lg border text-xs font-medium ${
                  stage.status === 'blocked'
                    ? 'bg-red-500/10 border-red-500/40 text-red-400'
                    : stage.status === 'applied'
                    ? 'bg-blue-500/10 border-blue-500/40 text-blue-400'
                    : 'bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                {stage.stage}
              </div>
              {i < result.pipeline.length - 1 && (
                <ArrowRight size={14} className="text-slate-600" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-1">
          {result.pipeline
            .filter((s) => s.note)
            .map((s, i) => (
              <p key={i} className="text-xs text-slate-400">
                <span className="text-slate-300 font-medium">{s.stage}:</span> {s.note}
              </p>
            ))}
        </div>
      </div>

      {/* Recommended Defenses */}
      {result.recommendedDefenses.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <ShieldAlert size={18} className="text-yellow-400" />
            Recommended Defenses
          </h2>
          <div className="flex flex-wrap gap-2">
            {result.recommendedDefenses.map((id) => {
              const d = defenses.find((def) => def.id === id)
              return (
                <span
                  key={id}
                  className="text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1.5 rounded-full flex items-center gap-1"
                >
                  <ShieldCheck size={12} />
                  {d?.name}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultsPanel