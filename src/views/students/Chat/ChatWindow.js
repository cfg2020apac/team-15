import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
import ChatBubble from './ChatBubble'
import ReceiptIcon from '@material-ui/icons/Receipt'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
    border: '1px solid #dee2e6',
    marginTop: '32px',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
  },
})

const ChatWindow = () => {
  const classes = useStyles()

  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <Divider />
          <Grid item xs={12} style={{ padding: '10px' }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar>
                  <ReceiptIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText>JA - Leader Dialog</ListItemText>
            </ListItem>
            <ListItem button key="Alice">
              <ListItemIcon>
                <Avatar>
                  <ReceiptIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText>JA - Innovation Camp</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={9}>
          <List className={classes.messageArea}>
            <ListItem key="1">
              <ChatBubble
                direction="left"
                text="Hello how's everyone doing? There is a an upcoming lesson this Friday."
                time="09.30"
                name="Tan Swee Keat"
              />
            </ListItem>

            <ListItem key="2">
              <ChatBubble
                direction="right"
                text="Alright, Mr Tan!"
                time="09.30"
                name="Maurice"
              />
            </ListItem>

            <ListItem key="3">
              <ChatBubble
                direction="right"
                text="Will be attending"
                time="09.30"
                name="Maurice"
              />
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChatWindow
