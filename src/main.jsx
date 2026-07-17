import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Playground from './pages/Playground.jsx'
import AttackLibrary from './pages/AttackLibrary.jsx'
import DefenseLibrary from './pages/DefenseLibrary.jsx'
import Learn from './pages/Learn.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="playground" element={<Playground />} />
          <Route path="attacks" element={<AttackLibrary />} />
          <Route path="defenses" element={<DefenseLibrary />} />
          <Route path="learn" element={<Learn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)