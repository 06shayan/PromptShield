import { useEffect, useState } from 'react'
import { Loader2, Check } from 'lucide-react'

const SCAN_STEPS = [
  'Scanning Prompt...',
  'Detecting Injection Pattern...',
  'Applying Defenses...',
  'Running Model...',
  'Generating Security Report...',
]

function ScanningLoader({ onComplete }) {
  const [completedSteps, setCompletedSteps] = useState(0)

  useEffect(() => {
    if (completedSteps >= SCAN_STEPS.length) {
      const finishTimer = setTimeout(onComplete, 300)
      return () => clearTimeout(finishTimer)
    }
    const timer = setTimeout(() => {
      setCompletedSteps((prev) => prev + 1)
    }, 450)
    return () => clearTimeout(timer)
  }, [completedSteps, onComplete])

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
      <div className="max-w-sm mx-auto space-y-4">
        {SCAN_STEPS.map((step, i) => {
          const isDone = i < completedSteps
          const isActive = i === completedSteps
          return (
            <div
              key={step}
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                isDone || isActive ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                {isDone ? (
                  <Check size={18} className="text-emerald-400" />
                ) : isActive ? (
                  <Loader2 size={16} className="text-blue-400 animate-spin" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  isDone ? 'text-emerald-400' : isActive ? 'text-white' : 'text-slate-500'
                }`}
              >
                {step}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScanningLoader