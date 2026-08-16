import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import MainLayout from './components/MainLayout'

function App() {

  return (
    <div className='' >

      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<StudentDashboard />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
