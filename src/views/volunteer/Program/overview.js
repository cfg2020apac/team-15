import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

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

const Overview = () => {
  const classes = useStyles()
  return (
    <Box >
      <Container maxWidth="md">
        <Grid item xs={12} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Program Overview
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value="JA Leader Dialogue"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                value="The program enables students to learn from young role models and enhance their understanding of future workplace. Through the seminar, a leader will share with students their life stories, ups and downs in their career, role models, what they look for when hiring and advise students on the importance of life planning and life-long learning."
                multiline
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="programLength"
                label="Program Length"
                id="programLength"
                value="1.5 hours (OLE learning time)"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="targetParticipants"
                label="Target Participants"
                id="targetParticipants"
                value="Form 1 to Form 6 students"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="classSize"
                label="Class Size"
                id="classSize"
                value="150 students (minimum for school venue"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="language"
                label="Language"
                id="language"
                value="English or Cantonese"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="programFormat"
                label="Program Format"
                id="programFormat"
                value="Face-to-face program: Minimum 150 students, led by a speaker at school Online program: Minimum 150 students, led by a speaker at online platforms"
                multiline
                InputLabelProps={{ shrink: true }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
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

export default Overview