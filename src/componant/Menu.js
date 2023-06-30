import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import DishCard from './DishCard';
import "./menu.css" ;
import photo1 from "../img/dishes/greek salad.jpg"
import photo2 from "../img/dishes/Bruschetta.jpg"
import photo3 from "../img/dishes/Raw_Lemon_Cake.jpg"





function Menu() {
    
let myArr = [
    {
     
        title: 'Greak salad',
        describ: 'The greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        btntit: 'order',
        img: photo1,
        Price: '$5.99'
    },
    {
     
        title: 'Bruschetta',
        describ: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        btntit: 'order',
        img:photo2,
    
        Price: '$5.99'
    },
    {
    
        title: 'Lemon Dessert',
        describ: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        btntit: 'order',
        img:photo3,
        Price: '$5.99'
    },
    

];
  return (
    <Container maxWidth="lg"  className='Specials' id='Menu'>

        <Grid    container     direction="row"
  
              alignItems="center"
              mb={4}>
              <Grid  item lg={4} sm={12} xs={12}  align="center" >
              <Typography variant="h4" fontWeight="bold"   mt={4} 
              >Specials
              </Typography>
              </Grid> 
              <Grid  item lg={4} sm={12} xs={12}  align="center" >
              <Typography variant="h4" fontWeight="bold" align='center'   
              >
              <br></br>
              </Typography>
              </Grid> 
              <Grid item lg={4} sm={12} xs={12}  align="center">
              <Button  variant="contained" color="myColor"  size="large"  style={{  fontSize: "20px" , fontWeight: "bold" , }} 
                  >Online Menu
              </Button>
              </Grid>
        </Grid>
    <Grid container     direction="row"
    justifyContent="center"
    alignItems="center" className='dishapp'>
                { myArr.map((dish,index) => {
                    
                     return (  
                      <Grid key={index} item lg={4} sm={6} xs={12}  align="center">
                            <DishCard 
                                   title={dish.title}
                                   img={dish.img}
                                   describe={dish.describ}
                                   Price={dish.Price}
                                   btntit={dish.btntit}
                            ></DishCard>  
                      </Grid>
                                   
                        )
                } )}
    </Grid>
    </Container>
  )
}

export default Menu
