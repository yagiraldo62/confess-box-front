import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import { Typography } from '@mui/material'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.error('Error:', error, errorInfo)
  }

  render (): JSX.Element {
    if (this.state.hasError) {
      return (
        <Typography variant="h5" color="error" align="center">
          Something went wrong. Please try again later.
        </Typography>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
