import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GetAppIcon from '@material-ui/icons/GetApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  export default function Materials(props) {
    const classes = useStyles();
    const titles = [
        { title: "Lecture Slide - Session 1" },
        { title: "Lecture Slide - Session 2" },
        { title: "Lecture Slide - Session 3" },
        { title: "Lecture Slide - Session 4" },
        { title: "Lecture Slide - Session 5" },
        { title: "Lecture Slide - Session 6" }
    ]
    let materialList = [];
    for (let i = 0; i < titles.length; ++i) {
        materialList.push(
            <ListItem button>
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={titles[i].title} />
                <ListItemSecondaryAction>
                    <a href="/files/file.pdf" download>
                        <IconButton edge="end" aria-label="download">
                        <GetAppIcon />
                        </IconButton>
                    </a>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="md">
                <List>
                    {materialList}
                 </List>
            </Container>
          </div>
        </main>
      </React.Fragment>
    );
  }