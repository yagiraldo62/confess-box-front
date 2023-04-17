import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Avatar, Box, type Theme, IconButton } from '@mui/material'
import useAuth from '../../hooks/auth/useAuth'
import LogoutIcon from '@mui/icons-material/Logout'
import { resetAuthState } from '../../store/AuthStore'
import { useDispatch } from 'react-redux'
const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    marginRight: 8
  }
}))

export default function UserAvatar ({
  withLogout = false,
  withName = false,
  altUser = null,
  altText = null
}: {
  withLogout?: boolean
  withName?: boolean
  altUser?: User | null
  altText?: string | null
}): JSX.Element {
  const classes = useStyles()
  const { user } = useAuth()
  const dispatch = useDispatch()
  const currentUser = altUser || user
  if (currentUser == null) return <></>

  const handleLogout = () => {
    console.log('handleLogout')
    dispatch(resetAuthState())
  }

  return (
    <Box display="flex" alignItems="center">
      <Avatar
        alt={currentUser.name}
        src={currentUser.photo}
        className={`${withName ? classes.avatar : ''}`}
      />
      {withName && (
        <>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bolder', lineHeight: 1.2 }}
          >
            {currentUser.name}
            {typeof altText === 'string' && (
              <>
                <br />
                <Typography
                  sx={{ display: 'inline-block', mt: -2 }}
                  variant="caption"
                  color="text.secondary"
                >
                  {altText}
                </Typography>
              </>
            )}
          </Typography>
          {withLogout && (
            <IconButton
              size="small"
              onClick={handleLogout}
              aria-controls="user-menu"
              aria-haspopup="true"
              sx={{ marginLeft: 1 }}
            >
              <LogoutIcon />
            </IconButton>
          )}
        </>
      )}
    </Box>
  )
}
