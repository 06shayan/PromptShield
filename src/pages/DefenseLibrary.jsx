import { useState } from 'react'
import { Search } from 'lucide-react'
import { defenses } from '../data/defenses.js'
import DefenseCard from '../components/DefenseCard.jsx'
import DefenseModal from '../components/DefenseModal.jsx'

function DefenseLibrary() {
  const [query, setQuery] = useState('')
  const [selectedDefense, setSelectedDefense] = useState(null)

  const filteredDefenses = defenses.filter((defense) =>
    defense.name.toLowerCase().includes(query.toLowerCase()) ||
    defense.description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Defense Library</h1>
      <p className="text-slate-400 mb-6">Learn how common prompt injection defenses work.</p>

      <div className="relative mb-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search Defenses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDefenses.map((defense) => (
          <DefenseCard key={defense.id} defense={defense} onClick={setSelectedDefense} />
        ))}
      </div>

      {filteredDefenses.length === 0 && (
        <p className="text-slate-500 text-center mt-10">No defenses found.</p>
      )}

      <DefenseModal defense={selectedDefense} onClose={() => setSelectedDefense(null)} />

    </div>
  )
}

export default DefenseLibrary