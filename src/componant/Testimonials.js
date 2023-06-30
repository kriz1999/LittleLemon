import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import photo1 from "../img/people/patrick.jpg"
import photo2 from "../img/people/lisa.jpg"
import photo3 from "../img/people/amanda.jpg"
import photo4 from "../img/people//joy.jpg"



 const reviews = [
        {
            name: "Patrick",
            img: photo1,
            text: "It was an amazing experience, I really enjoyed the food especially the signature dessert, and the service was great.",
            rating: "5/5",
        },
        {
            name: "Lisa",
            img: photo2,
            text: "I ordered the greek salad online and it was a worthwhile experience, the food is delicious and the service is excellent",
            rating: "4.5/5",
        },
        {
            name: "Amanda",
            img: photo3,
            text: "We went to little lemon restaurant for our wedding anniversary, we really enjoyed it, it was very romantic",
            rating: "4/5",
        },
        {
            name: "Joy",
            img: photo4,
            text: "I booked a table at little lemon restaurant for my friend's birthday and it was a special night, we had a lot of fun !",
            rating: "4.5/5",
        },
    ];


    
    


function Testimonials() {
  return (
  
    <div className='TestimonialsPage'> 
    <Container>
        <Typography align='center' variant='h3'>Testimonials</Typography>
            <Grid container     direction="row"
              justifyContent="center"
                  alignItems="center" className='dishapp'>

            {reviews.map((review, index) => { 
       
                    return  (
                        <Card  className='ratings' key={index} sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <div className='rating'>
                                    <CardMedia
                                    className='img-rating'
                                    component="img"
                                 
                                    image={review.img}
                                    alt="green iguana"
                                    />
                                    <div className='star' >
                                        <StarHalfIcon className='rate' fontSize='large'></StarHalfIcon>
                                        <Typography  variant="body" >
                                        {review.rating}
                                        </Typography>
                                    </div>
                                </div>
                                <CardContent>
                                <Typography gutterBottom variant="h5" >
                                   {review.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {review.text}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                    )
                })}




             </Grid>





          

      
             </Container>

    </div>
  )
}

export default Testimonials


