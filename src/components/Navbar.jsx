import { NavLink } from 'react-router-dom'
import { Shield } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Playground', path: '/playground' },
  { name: 'Attack Library', path: '/attacks' },
  { name: 'Defense Library', path: '/defenses' },
  { name: 'Learn', path: '/learn' },
]

function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
          <Shield size={22} />
          PromptShield
        </div>

        <div className="flex gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar