import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Data from './pages/Data'
import Settings from './pages/Settings'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <h1> Welcome to Analytics Dashboard</h1> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data" element={<Data />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
