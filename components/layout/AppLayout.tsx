import React from 'react'
import AppBar from './AppBar'
import Head from 'next/head'
import { Container } from '@mui/material'
import ErrorBoundary from './ErrorBoundary'

export default function AppLayout ({
  children,
  title = 'Confess Box'
}: {
  children: React.ReactNode
  title?: string
}): JSX.Element {
  return (
    <ErrorBoundary>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar />
      <Container maxWidth="md" sx={{ pt: 10 }}>
        {children}
      </Container>
    </ErrorBoundary>
  )
}
