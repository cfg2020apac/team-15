import React from 'react'
import AdminNav from '../../../components/common/AdminNav.js'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ProgramCard from '../../../components/common/ProgramCard.js'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Avatar } from '@material-ui/core'
import ChatWindow from './ChatWindow.js'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '80%',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    alignContent: 'center',
  },
  container1: {
    padding: theme.spacing(2),
    alignItems: 'center',
  },
  card: {
    flexGrow: 1,
    minWidth: 275,
    float: 'none',
    borderRadius: '0',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
  },
  cardGridChats: {
    paddingTop: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    display: 'inline',
    marginRight: 10,
  },
}))

export default function Dashboard() {
  const classes = useStyles()

  return (
    <div>
      <AdminNav />
      <br />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography
          variant="h1"
          color="textPrimary"
          component="p"
          align="center"
        >
          <InsertEmoticonIcon
            color="primary"
            style={{ fontSize: 40, marginRight: '8px' }}
          ></InsertEmoticonIcon>
          Let's Chat!
          <InsertEmoticonIcon
            color="primary"
            style={{ fontSize: 40, marginLeft: '8px' }}
          ></InsertEmoticonIcon>
        </Typography>
        {/* </Container>
      <Container className={classes.cardGridChats} maxWidth="lg">
        <Grid
          className={classes.cardGridChats}
          container
          direction="row"
          justify="space-evenly"
          alignItems="baseline"
        >
          <Card
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            onClick={() => {
              console.log('P1 Calling...')
            }}
          >
            <CardContent>
              <Avatar className={classes.avatar}>P1</Avatar>
              <Typography
                display="inline"
                variant="h6"
                color="textPrimary"
                component="p"
                align="left"
              >
                Program 1 Chat
              </Typography>
              <Typography>Last Message Sent On: {Date()}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          className={classes.cardGridChats}
          container
          direction="row"
          justify="space-evenly"
          alignItems="baseline"
        >
          <Card
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            onClick={() => {
              console.log('P1 Calling...')
            }}
          >
            <CardContent>
              <Avatar className={classes.avatar}>P1</Avatar>
              <Typography
                display="inline"
                variant="h6"
                color="textPrimary"
                component="p"
                align="left"
              >
                Program 1 Chat
              </Typography>
              <Typography>Last Message Sent On: {Date()}</Typography>
            </CardContent>
          </Card>
        </Grid> */}
        <ChatWindow />
      </Container>
    </div>
  )
}
