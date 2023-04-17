import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

interface PageSpinnerProps {
  title?: string
}
export default function PageSpinner ({ title }: PageSpinnerProps): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 20
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexDirection: 'column'
        }}
      >
        {typeof title === 'string' && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold'
            }}
          >
            {title}
          </Typography>
        )}
        <CircularProgress color="primary" />
      </Box>
    </Box>
  )
}
