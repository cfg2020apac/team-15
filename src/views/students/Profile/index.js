import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import Nav from '../../../components/common/Nav'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#C0C0C0',
    height: '100px',
    width: '100px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  save: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Profile = () => {
  const classes = useStyles()
  return (
    <Box>
      <Nav />
      <Container maxWidth="md">
        <Grid item xs={12} elevation={6} square>
          <div className={classes.paper}>
            {/* <AccountCircleIcon
              style={{ height: '100px', width: '100px', color: '#C0C0C0' }}
            /> */}
            <Avatar
              alt="Travis"
              src="https://material-ui.com/static/images/avatar/2.jpg"
              style={{ height: '100px', width: '100px' }}
            />
            <Typography component="h1" variant="h5">
              Profile
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value="John Doe"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                id="email"
                value="johndoe@gmail.com"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="contactNo"
                label="Contact No."
                id="contactNo"
                value="90008000"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="accountType"
                label="Account Type"
                id="accountType"
                value="STUDENT"
                disabled
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="level"
                label="Level"
                id="level"
                value="SECONDARY"
                disabled
                InputLabelProps={{ shrink: true }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.save}
              >
                Save Changes
              </Button>
            </form>
          </div>
        </Grid>
      </Container>
    </Box>
  )
}

export default Profile
