import React from 'react'
import VolunteerNav from '../../../components/common/VolunteerNav.js'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ProgramCard from '../../../components/common/ProgramCard.js'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(3),
  },
}))

export default function Programs() {
  const classes = useStyles()

  const programs = [
    {
      title: 'JA Career Dimensions 4.0',
      body:
        'The program connects young people with career opportunities and future skills required under the Industrial Revolution 4.0. Through speed mentoring and hands-on activities on creativity & problem solving, collaboration, adaptability & resilience, young people will be guided to identify their career aspirations, and develop core competencies every youth needs in order to survive in the coming world of work.',
      image: '/images/program_1.jpg',
    },
    {
      title: 'JA Building a Financially Capable Generation',
      body:
        'The program connects young people with career opportunities and future skills required under the Industrial Revolution 4.0. Through speed mentoring and hands-on activities on creativity & problem solving, collaboration, adaptability & resilience, young people will be guided to identify their career aspirations, and develop core competencies every youth needs in order to survive in the coming world of work.',
      image: '/images/program_2.jpg',
    },
    {
      title: 'JA International Trade Challenge Workshop',
      body:
        'The program connects young people with career opportunities and future skills required under the Industrial Revolution 4.0. Through speed mentoring and hands-on activities on creativity & problem solving, collaboration, adaptability & resilience, young people will be guided to identify their career aspirations, and develop core competencies every youth needs in order to survive in the coming world of work.',
      image: '/images/program_3.jpg',
    },
    {
      title: 'JA Personal Spending 101',
      body:
        'The program connects young people with career opportunities and future skills required under the Industrial Revolution 4.0. Through speed mentoring and hands-on activities on creativity & problem solving, collaboration, adaptability & resilience, young people will be guided to identify their career aspirations, and develop core competencies every youth needs in order to survive in the coming world of work.',
      image: '/images/program_4.jpg',
    },
    {
      title: 'JA Financing for A Future',
      body:
        'The program connects young people with career opportunities and future skills required under the Industrial Revolution 4.0. Through speed mentoring and hands-on activities on creativity & problem solving, collaboration, adaptability & resilience, young people will be guided to identify their career aspirations, and develop core competencies every youth needs in order to survive in the coming world of work.',
      image: '/images/program_5.jpg',
    },
  ]

  return (
    <div>
      <VolunteerNav />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={5}>
          {programs.map((program) => (
            <Grid item xs={12} sm={12} md={6} lg={4} spacing={3}>
              <ProgramCard
                title={program.title}
                body={program.body}
                image={program.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
