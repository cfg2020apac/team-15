import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GradeIcon from '@material-ui/icons/Grade';
import BackupIcon from '@material-ui/icons/Backup';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Materials" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GradeIcon />
      </ListItemIcon>
      <ListItemText primary="Gradebook" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BackupIcon />
      </ListItemIcon>
      <ListItemText primary="Submission" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem>
  </div>
);
