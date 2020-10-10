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
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(10),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  const [sessionId, setSessionId] = React.useState('');

  const handleChange = (event) => {
    setSessionId(event.target.value);
  };
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
              <Grid item md={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Session number</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sessionId}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Session 1</MenuItem>
                  <MenuItem value={2}>Session 2</MenuItem>
                  <MenuItem value={3}>Session 3</MenuItem>
                  <MenuItem value={3}>Session 4</MenuItem>
                  <MenuItem value={3}>Session 5</MenuItem>
                  <MenuItem value={3}>Session 6</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={5} lg={3}>
                <Typography>How was the pace of the workshop?</Typography>
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
                <Typography>Were there enough materials provided?</Typography>
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
                  How would you rate your mentor's teaching ability?
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
                  Are there any other feedback you would like to provide?
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
