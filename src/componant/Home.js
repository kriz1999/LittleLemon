import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css" 
import photo1 from "../img/restauranfood.jpg";
import photo2 from "../img/restaurant chef B.jpg";






function Home() {

    return (
        <div className='home' >
            <Container maxWidth="lg">
                <Grid container  >
                    <Grid item xs={12} md={6} align="start">
                        <Box className='boxhome' >
                            <Grid container  direction="column" align='start' style={{ display: "flex" }}>
                                <Grid item xs={10} lg={6} >
                                    <Typography className='home1'
                                        variant='h2'

                                        mt={2}
                                        color='yellow'
                                    >Little Lemon</Typography>
                                </Grid>
                                <Grid item xs={10} lg={6} >
                                    <Typography
                                        className='home2'
                                        variant='h3'

                                    >Chicago</Typography>
                                </Grid>

                                <Grid item xs={10} lg={6} md={6} mt={1}>
                                    <Typography
                                        className='home3'
                                        color='white'


                                    >Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a localy-sourced menu with daily specials.</Typography>
                                </Grid>
                                <Grid item xs={10} lg={6} mt={3}>
                                <Link to="/Form">
                                    <Button variant="contained" color="myColor" style={{ fontSize: "15px", fontWeight: "bold", color: "rgb(39, 44, 26)" }}
                                    >
                                        Reserve a table
                                    </Button>
                                    </Link> 
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} align="center" >
                        <Grid container className='boximgHome'>
                            <Grid item xs={5} lg={5} md={5} mt={1}>

                                <img src={photo1} className="rotate-translate" alt="dish"/>

                            </Grid>
                            <Grid item xs={5} lg={5} mt={1} >
                                <img className="translate-rotate" src={photo2} alt="dish"/>

                            </Grid>


                            {/* 
                        */}

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
