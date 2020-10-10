import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles({
  root: {
    textAlign: (props) => (props.direction == 'right' ? 'right' : 'left'),
    display: 'block',
  },
  bubble: {
    padding: '20px',
    backgroundColor: (props) =>
      props.direction == 'right' ? '#1E90FF' : '#D0D0D0',
    display: 'inline-block',
    borderRadius: '10px',
  },
})

const ChatBubble = (props) => {
  const classes = useStyles(props)

  const { direction, text, time } = props

  return (
    <Grid container className={classes.root}>
      <Box className={classes.bubble}>
        <Grid item xs={12}>
          <Typography
            style={{ color: direction == 'right' ? 'white' : 'black' }}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ color: direction == 'right' ? 'white' : 'black' }}
          >
            {time}
          </Typography>
        </Grid>
      </Box>
    </Grid>
  )
}

export default ChatBubble
