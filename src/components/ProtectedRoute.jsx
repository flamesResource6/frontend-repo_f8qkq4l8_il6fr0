import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function ProtectedRoute({ children, allow = ['client', 'trainer'] }) {
  const { token, user, initialized } = useAuth()

  if (!initialized) return null
  if (!token) return <Navigate to="/login" replace />
  if (user && !allow.includes(user.role)) return <Navigate to="/" replace />

  return children
}
