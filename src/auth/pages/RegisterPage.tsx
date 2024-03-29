import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Write your full name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField
              label="E-mail"
              type="email"
              placeholder="email@email.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#de5246' }}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Already registered?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
