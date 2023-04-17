import React from 'react'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import { loginWithGoogleUrl } from './guard/RequiresAuth'

const GoogleLoginButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
      href={loginWithGoogleUrl}
    >
      Iniciar sesión con Google
    </Button>
  )
}

export default GoogleLoginButton
