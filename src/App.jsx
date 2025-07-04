import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/components/pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App