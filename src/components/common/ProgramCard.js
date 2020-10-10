import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';
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
  const { title, body, image } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="JA Leader Dialogue"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" style={{ lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="http://www.jahk.org/wp-content/uploads/2020/09/JA-Leader-Dialogue_Factsheet_Eng.pdf" target="_blank" rel="noopener noreferrer">
      <Button size="medium" color="primary">
          Program Information
        </Button>
        </Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesFEDECvRU3JPbvWDCo5FrKyGNnj4_kIZFcr5z8JSbRFCvlg/viewform?usp=pp_url" target="_blank" rel="noopener noreferrer">
        <Button size="medium" color="primary">
          School Enrollment
        </Button>
        </Link>

      </CardActions>
    </Card>
  )
}
