import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [initialized, setInitialized] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    async function fetchMe() {
      if (!token) {
        setInitialized(true)
        return
      }
      try {
        setLoading(true)
        const res = await fetch(`${baseUrl}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        } else {
          logout()
        }
      } catch (e) {
        logout()
      } finally {
        setLoading(false)
        setInitialized(true)
      }
    }
    fetchMe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const login = async (email, password) => {
    const params = new URLSearchParams()
    params.append('username', email)
    params.append('password', password)

    const res = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
    if (!res.ok) {
      const msg = await res.text()
      throw new Error(msg || 'Login failed')
    }
    const data = await res.json()
    localStorage.setItem('token', data.access_token)
    setToken(data.access_token)
    return data
  }

  const register = async ({ name, email, password, role }) => {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
    })
    if (!res.ok) {
      const msg = await res.text()
      throw new Error(msg || 'Registration failed')
    }
    // Auto login after register
    await login(email, password)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  const value = useMemo(() => ({ token, user, loading, initialized, login, register, logout }), [token, user, loading, initialized])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
