import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../components/AuthProvider'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('client')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      setLoading(true)
      await register({ name, email, password, role })
      if (role === 'trainer') navigate('/dashboard/trainer')
      else navigate('/dashboard/client')
    } catch (err) {
      setError('Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-teal-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <p className="text-sm text-gray-300 mt-1">Join FitLink Global</p>

        {error && <div className="mt-4 text-sm text-red-300">{error}</div>}

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="text-sm text-gray-200">Full name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="text-sm text-gray-200">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="text-sm text-gray-200">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="text-sm text-gray-200">I am a</label>
            <select value={role} onChange={(e)=>setRole(e.target.value)} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500">
              <option value="client">Client</option>
              <option value="trainer">Trainer</option>
            </select>
          </div>
          <button disabled={loading} className="w-full rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-medium py-2 transition disabled:opacity-60">{loading? 'Creating...' : 'Create Account'}</button>
        </form>

        <p className="text-sm text-gray-300 mt-4">
          Already have an account? <Link to="/login" className="text-teal-300 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
