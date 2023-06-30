import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import photo from "../img/restaurant.jpg";


const About = () => {
  return (
    <div className='aboutPage' id='About'>
        <Container  maxWidth="md">
        <div className='about'>
            <Typography variant='h3' fontWeight="bold" align='center' mb={3}
            mt={7}>About</Typography>
            <Grid container justifyContent="center" >
                <Grid item xs={12} md={6} lg={6} xl={6} className='aboutShadow'>
                    <div className='aboutImg'>
                    <img src={photo}></img>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6} className='aboutShadow2' >
                    <div className='aboutText'>
                    <Typography className='aboutText2'>
                    Little Lemon is a 4-star restaurant located in the city of Chicago, distinguished by its varied western and eastern cuisine, and many of the most famous dessert dishes around the world prepared by the best chefs, and it is distinguished by its modern design and wonderful view from the terrace.
                    </Typography>
                    </div>
                </Grid>
            </Grid>
            <div className='aboutShadow'></div>
        </div>

        </Container>
    </div>
  )
}

export default About
