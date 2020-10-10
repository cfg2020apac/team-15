import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useRouter } from 'next/router'
import Link from 'next/link'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 18,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress)

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function ProgramCard(props) {
  const classes = useStyles()
  const router = useRouter()
  const { program } = props
  const handleDetail = (e) => {
    e.preventDefault()
    router.push('/student/program/' + program.id)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleDetail}>
        <CardMedia
          className={classes.media}
          image={program.image}
          title={program.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {program.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Attendance {program.attendence}
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="body2" color="textSecondary" component="p">
                Progress:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <BorderLinearProgress
                variant="determinate"
                value={program.progress}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
