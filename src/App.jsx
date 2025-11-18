import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardClient from './pages/DashboardClient'
import DashboardTrainer from './pages/DashboardTrainer'
import { AuthProvider } from './components/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'

function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-teal-400 to-teal-600" />
          <span className="font-semibold text-white">FitLink Global</span>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/login" className="text-gray-200 hover:text-white">Login</Link>
          <Link to="/register" className="rounded-md bg-teal-500 hover:bg-teal-400 text-black px-3 py-1.5 font-medium">Get Started</Link>
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-14">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard/client"
              element={
                <ProtectedRoute allow={["client"]}>
                  <DashboardClient />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/trainer"
              element={
                <ProtectedRoute allow={["trainer"]}>
                  <DashboardTrainer />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  )
}
