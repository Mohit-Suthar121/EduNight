import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import MainLayout from './components/MainLayout'
import CoursesPage from './pages/CoursesPage'
import CourseDetailsPage from './pages/CourseDetailsPage'

function App() {

  return (
    <div className='' >

      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<StudentDashboard />} />
          <Route path='/courses' element={<CoursesPage/>} />
          {/* <Route path='/course-details' element={<CourseDetailsPage/>} /> */}
          <Route path='/courses/:id' element={<CourseDetailsPage/>} />
          
        </Route>
      </Routes>

    </div>
  )
}

export default App
