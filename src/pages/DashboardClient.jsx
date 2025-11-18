import React from 'react'
import { useAuth } from '../components/AuthProvider'
import { Link } from 'react-router-dom'
import { User, CalendarDays, Activity, ChevronRight } from 'lucide-react'

export default function DashboardClient() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-teal-900 text-white">
      <header className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-400 to-teal-600" />
          <span className="font-semibold tracking-wide">FitLink Global</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-300 flex items-center gap-2"><User className="w-4 h-4" /> {user?.name}</span>
          <button onClick={logout} className="text-teal-300 hover:underline">Logout</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold">Client Dashboard</h1>
        <p className="text-gray-300 mt-2">Welcome! Explore trainers and manage your sessions.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-xl bg-gray-50/20 backdrop-blur-sm border border-white/10 p-5">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-teal-300" />
              <h3 className="font-medium">Find Trainers</h3>
            </div>
            <p className="text-sm text-gray-300 mt-2">Search by goals, style, or budget.</p>
            <Link to="/" className="mt-4 inline-flex items-center gap-1 text-teal-300 hover:underline">Browse now <ChevronRight className="w-4 h-4" /></Link>
          </div>

          <div className="rounded-xl bg-gray-50/20 backdrop-blur-sm border border-white/10 p-5">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-teal-300" />
              <h3 className="font-medium">Upcoming Sessions</h3>
            </div>
            <p className="text-sm text-gray-300 mt-2">Your scheduled workouts appear here.</p>
            <div className="mt-4 text-sm text-gray-400">No sessions yet.</div>
          </div>

          <div className="rounded-xl bg-gray-50/20 backdrop-blur-sm border border-white/10 p-5">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-teal-300" />
              <h3 className="font-medium">Progress</h3>
            </div>
            <p className="text-sm text-gray-300 mt-2">Track weight, PRs, and streaks.</p>
            <div className="mt-4 text-sm text-gray-400">Coming soon.</div>
          </div>
        </div>
      </main>
    </div>
  )
}
