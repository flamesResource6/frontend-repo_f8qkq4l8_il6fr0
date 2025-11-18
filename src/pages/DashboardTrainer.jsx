import React from 'react'
import { useAuth } from '../components/AuthProvider'
import { Link } from 'react-router-dom'
import { Users, CalendarCheck2, DollarSign, User } from 'lucide-react'

export default function DashboardTrainer() {
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
        <h1 className="text-3xl font-semibold">Trainer Dashboard</h1>
        <p className="text-gray-300 mt-2">Manage clients, sessions, and your offerings.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-xl bg-gray-50/20 backdrop-blur-sm border border-white/10 p-5">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-teal-300" />
              <h3 className="font-medium">Clients</h3>
            </div>
            <p className="text-sm text-gray-300 mt-2">Your client list appears here.</p>
            <div className="mt-4 text-sm text-gray-400">No clients yet.</div>
          </div>

          <div className="rounded-xl bg-gray-50/20 backdrop-blur-sm border border-white/10 p-5">
            <div className="flex items-center gap-3">
              <CalendarCheck2 className="w-5 h-5 text-teal-300" />
              <h3 className="font-medium">Sessions</h3>
            </div>
            <p className="text-sm text-gray-300 mt-2">Schedule and manage bookings.</p>
            <div className="mt-4 text-sm text-gray-400">No sessions yet.</div>
          </div>

          <div className="rounded-xl bg-gray-50/20 backdrop-blur-sm border border-white/10 p-5">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-teal-300" />
              <h3 className="font-medium">Earnings</h3>
            </div>
            <p className="text-sm text-gray-300 mt-2">Track payouts and rates.</p>
            <div className="mt-4 text-sm text-gray-400">Coming soon.</div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/" className="text-teal-300 hover:underline">Back to marketing site</Link>
        </div>
      </main>
    </div>
  )
}
