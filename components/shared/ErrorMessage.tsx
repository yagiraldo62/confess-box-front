import React from 'react'
import { Typography } from '@mui/material'

interface ErrorMessageProps
  extends Partial<{
    message: string
  }> {}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (typeof message === 'string') {
    return (
      <Typography color="error" variant="body1" gutterBottom>
        {message}
      </Typography>
    )
  }

  return <></>
}

export default ErrorMessage
