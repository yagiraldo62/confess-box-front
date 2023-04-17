import React from 'react'
import useAuth from '../../../hooks/auth/useAuth'

export const loginWithGoogleUrl =
  typeof process.env.API_URL === 'string'
    ? `${process.env.API_URL}/auth/google`
    : ''
export default function RequiresAuth ({ children }: { children: JSX.Element }): JSX.Element {
  const { authenticated } = useAuth()

  if (!authenticated) {
    return (
      <div onClick={() => (location.href = loginWithGoogleUrl)}>{children}</div>
    )
  }

  return children
}
