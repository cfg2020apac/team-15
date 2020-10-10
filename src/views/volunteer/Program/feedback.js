import React, { useState } from 'react'
import {
  Box,
  Typography,
  makeStyles,
  Theme,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Divider,
  Container,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(10),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notification: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(8),
    borderBottomColor: theme.palette.primary.dark,
  },
  divider: {
    color: theme.palette.primary.dark,
  },
}))

const Feedback = (props) => {
  const classes = useStyles(props)
  const [status, setStatus] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  function IconContainer(props) {
    const { value, ...other } = props
    return <span {...other}>{customIcons[value].icon}</span>
  }

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  }

  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="md">
          <form className={classes.form}>
            <Grid container spacing={3}>
              <Grid item xs={5} lg={3}>
                <Typography>How is the student participation in the program?</Typography>
              </Grid>
              <Grid item xs={7} lg={9}>
                <Rating
                  name="pace"
                  defaultValue={0}
                  getLabelText={(value) => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                />
              </Grid>
              <Grid item xs={5} lg={3}>
                <Typography>Is the length of program session suitable?</Typography>
              </Grid>
              <Grid item xs={7} lg={9}>
                <Rating
                  name="materials"
                  defaultValue={0}
                  getLabelText={(value) => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                />
              </Grid>
              <Grid item xs={5} lg={3}>
                <Typography>
                  How would you rate the overall student engagement in this program?
                </Typography>
              </Grid>
              <Grid item xs={7} lg={9}>
                <Rating
                  name="teaching-ability"
                  defaultValue={0}
                  getLabelText={(value) => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                />
              </Grid>
              <Grid item xs={5} lg={3}>
                <Typography>
                  Any comment or feedback you would like to provide to JA HONGKONG?
                </Typography>
              </Grid>
              <Grid item xs={7} lg={9}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  name="poc_contact_number"
                  id="poc_contact_number"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </Container>
      </Box>
    </>
  )
}

export default Feedback
