import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import { learnSections } from '../data/learnContent.js'

function Learn() {
  const [activeId, setActiveId] = useState(learnSections[0].id)
  const activeSection = learnSections.find((s) => s.id === activeId)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Learn</h1>
      <p className="text-slate-400 mb-8">A knowledge base on prompt injection and LLM security.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <nav className="space-y-1">
            {learnSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveId(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeId === section.id
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <BookOpen size={18} />
              <h2 className="text-lg font-semibold text-white">{activeSection.title}</h2>
            </div>
            <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">
              {activeSection.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn