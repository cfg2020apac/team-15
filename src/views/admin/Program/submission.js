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
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Nav from '../../../components/common/Nav.js';
import Drawer from '@material-ui/core/Drawer'
import { FormatAlignRight } from '@material-ui/icons';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';




const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

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
    },
    iconPaddingTop: {
        paddingTop: 20
    },
    padSubmission : {
        paddingTop : 10,
        paddingBottom : 10
    }
}));

function createData(name, uploadedDate) {
    return { name, uploadedDate };
}

const rows = [
    createData('lesson1_submission_1.doc', new Date().toISOString()),
    createData('lesson1_submission_2', new Date().toISOString()),
];



export default function Overview(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.cardGrid} maxWidth="md">
                <Typography
                    variant="h6"
                    color="textPrimary"
                    component="p"
                    align="left"
                >
                    Lesson Submission
                </Typography>
            </Container>
            <Container maxWidth="md">
                <TableContainer component={Paper} className={classes.paddingTop}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell><b>File Name</b></StyledTableCell>
                                <StyledTableCell align="right">Time Uploaded</StyledTableCell>
                                <StyledTableCell align="right">Download</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.uploadedDate}</StyledTableCell>
                                    <StyledTableCell align="right"><a href="/files/file.pdf" download>
                                        <IconButton edge="end" aria-label="download">
                                            <GetAppIcon />
                                        </IconButton>
                                    </a></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <br />
            <Container maxWidth="md" >
                <Card align="center" className={classes.padSubmission}>
                    <CloudUploadIcon color="disabled" style={{ fontSize: 20 }}/>
                    <Typography display="inline" variant="subtitle1" align="center" color="textSecondary" paragraph>
                        Drag and Drop Your Files Here For Submission
              </Typography>
                    <CloudUploadIcon color="disabled" style={{ fontSize: 20 }}/>
                </Card>
            </Container>
        </div>
    );
}