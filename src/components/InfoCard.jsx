function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <Icon size={24} className="text-blue-400 mb-3" />
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  )
}

export default InfoCard