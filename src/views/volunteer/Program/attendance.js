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

function createData(session, attendance) {
  return { session, attendance };
}

const rows = [
  createData('session 1', '25/25'),
  createData('session 2', '24/25'),
  createData('session 3', '23/25'),
  createData('session 4', '17/25'),
  createData('session 5', '23/25')
];

export default function Attendance() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
    <Container maxWidth="md">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Session</TableCell>
            <TableCell align="center">Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="center">
                {row.session}
              </TableCell>
              <TableCell align="center">{row.attendance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </Container>
    </div>
    );
}