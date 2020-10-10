import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Container from '@material-ui/core/Container';

const useRowStyles =  makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
          },
        flexDirection: 'column',
      },
    }));
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
        table: {
            minWidth: 700,
        },
        paddingTop: {
            paddingTop: 35
        }
    }));
    

function createData(sessionId, overallPace, satisfactionLevel) {
  return {
    sessionId,
    overallPace,
    satisfactionLevel,
    feedbacks: [
      { feedback: 'I love your way of teaching!', student: 'Anonymous' },
      { feedback: 'Your lesson is easy to follow, thanks for teaching us', student: 'Anonymous' },
      { feedback: 'Thanks for teaching us!', student: 'John Doe' },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.sessionId}
        </TableCell>
        <TableCell>{row.overallPace}</TableCell>
        <TableCell align="right">{row.satisfactionLevel}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Feedbacks
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.feedbacks.map((feedbacksRow) => (
                    <TableRow key={feedbacksRow.date}>
                      <TableCell component="th" scope="row">
                        {feedbacksRow.feedback}
                      </TableCell>
                      <TableCell>{feedbacksRow.student}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    sessionId: PropTypes.string.isRequired,
    overallPace: PropTypes.string.isRequired,
    satisfactionLevel: PropTypes.string.isRequired,
    feedbaks: PropTypes.arrayOf(
      PropTypes.shape({
        feedback: PropTypes.string.isRequired,
        student: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('Session 1', "a bit Slow", "Very Good"),
  createData('Session 2', "too fast", "Satisfied"),
  createData('Session 3', "Good", "Excellent"),
  createData('Session 4', "Good", "Very Good"),
  createData('Session 5', "Good", "Very Good"),
];

export default function FeedbackReceived() {
    const classes = useStyles();
  return (
    <div>
    <Container className={classes.cardGrid}  maxWidth="md">
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Session number</TableCell>
            <TableCell align="right">Overall Pace</TableCell>
            <TableCell align="right">Performance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.sessionId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
        </div>
  );
}
