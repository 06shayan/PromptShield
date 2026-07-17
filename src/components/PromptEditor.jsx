import { FileText } from 'lucide-react'

function PromptEditor({ prompt, onChange, disabled }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
        <FileText size={18} className="text-blue-400" />
        2. Prompt Editor
      </h2>
      <textarea
        value={prompt}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={4}
        placeholder="Select an attack above, or type your own prompt here..."
        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 disabled:opacity-50 font-mono"
      />
    </div>
  )
}

export default PromptEditor