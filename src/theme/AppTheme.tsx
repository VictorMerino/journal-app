import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { mainTheme } from '.'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
