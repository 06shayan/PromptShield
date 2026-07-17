const severityStyles = {
  Low: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  Medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  High: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  Critical: 'bg-red-500/10 text-red-400 border-red-500/30',
}

function SeverityBadge({ severity }) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-1 rounded-full border ${severityStyles[severity] || 'bg-slate-500/10 text-slate-400 border-slate-500/30'}`}
    >
      {severity}
    </span>
  )
}

export default SeverityBadge