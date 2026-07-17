import { useState } from 'react'
import { Search } from 'lucide-react'
import { attacks } from '../data/attacks.js'
import AttackCard from '../components/AttackCard.jsx'
import AttackModal from '../components/AttackModal.jsx'


function AttackLibrary() {
  const [query, setQuery] = useState('')
  const [selectedAttack, setSelectedAttack] = useState(null)


  const filteredAttacks = attacks.filter((attack) =>
    attack.name.toLowerCase().includes(query.toLowerCase()) ||
    attack.description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Attack Library</h1>
      <p className="text-slate-400 mb-6">Browse common prompt injection attack techniques.</p>

      <div className="relative mb-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search attacks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAttacks.map((attack) => (
          // <AttackCard key={attack.id} attack={attack} />
          <AttackCard key={attack.id} attack={attack} onClick={setSelectedAttack} />

        ))}
      </div>

      {filteredAttacks.length === 0 && (
        <p className="text-slate-500 text-center mt-10">No attacks found.</p>
      )}
      
      <AttackModal attack={selectedAttack} onClose={() => setSelectedAttack(null)} />

    </div>
  )
}

export default AttackLibrary