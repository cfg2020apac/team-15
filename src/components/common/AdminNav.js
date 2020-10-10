import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Typography, Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import PublicIcon from '@material-ui/icons/Public'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiButton-label': {
      color: '#FFFFFF',
    },
  },
  toolbar: {
    minHeight: 50,
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    color: '#FFFFFF',
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontWeight: 600,
  },
  button: {
    textTransform: 'uppercase',
    '&:focus': {
      outline: 'none',
    },
  },
}))

const AdminNav = (props) => {
  const classes = useStyles()
  const router = useRouter()

  const redirectHome = (e) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.icon}
          edge="start"
          onClick={redirectHome}
        >
          <PublicIcon />
        </IconButton>
        <Typography className={classes.title}>
          Logged In As:{' '}
          <Typography
            variant="inline"
            style={{
              padding: '4px',
              backgroundColor: '#ff4d4d',
              borderRadius: '14px',
            }}
          >
            Admin
          </Typography>
        </Typography>{' '}
        <Link href="http://127.0.0.1:8051/dash/" passHref>
          <Button className={classes.button}>Analytics</Button>
        </Link>
        <Link href="/admin/programs" passHref>
          <Button className={classes.button}>All Programs</Button>
        </Link>
        <Link href="/admin/chat" passHref>
          <Button className={classes.button}>My Chats</Button>
        </Link>
        <Link href="/admin/profile" passHref>
          <Button className={classes.button}>Profile</Button>
        </Link>
        <Link href="/">
          <Button className={classes.button} startIcon={<ExitToAppIcon />}>
            Sign Out
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default AdminNav
