import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles =  makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function createData(title, marks, comments, markedBy) {
  return { title, marks, comments, markedBy };
}

const rows = [
  createData('Project 1 (15%)', "83.3/100","N.A", "David"),
  createData('Project 2 (15%)', "73.3/100", "N.A", "David"),
  createData('Assignment 1 (25%)', "83.3/100", "N.A", "David"),
  createData('Test 1 (35%)', "93.3/100", "well done!", "David"),
  createData('Assignment 3 (10%)', "63.3/100", "work harder!", "David")
];

export default function Gradebook() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
    <Container maxWidth="md">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Graded Item</TableCell>
            <TableCell align="right">Marks</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Marked by</TableCell>
            <TableCell align="right">Verify Results</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.marks}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
              <TableCell align="right">{row.markedBy}</TableCell>
              <TableCell align="right">
              <Button variant="contained" color="primary">
                    Verify
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </Container>
    </div>
    );
}