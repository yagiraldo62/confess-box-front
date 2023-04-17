import React from 'react'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import {
  AppBar as ApplicationBar,
  Toolbar,
  Typography,
  type Theme,
  IconButton
} from '@mui/material'
import useAuth from '../../hooks/auth/useAuth'
import UserAvatar from './UserAvatar'
import GoogleLoginButton from '../auth/GoogleLoginButton'
import Logo from '../../assets/img/logo.png' // Import your logo image

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1
  },
  logo: {
    width: 40, // Adjust the size of the logo as per your requirement
    height: 40,
    marginRight: 1 // Add some spacing between the logo and the title
  }
}))

export default function AppBar (): JSX.Element {
  const classes = useStyles()
  const { authenticated } = useAuth()

  return (
    <ApplicationBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Image src={Logo} alt="logo" className={classes.logo} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Confess Box
        </Typography>
        {authenticated
          ? (
          <UserAvatar withLogout withName />
            )
          : (
          <GoogleLoginButton />
            )}
      </Toolbar>
    </ApplicationBar>
  )
}
