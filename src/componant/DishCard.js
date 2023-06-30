import { Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React from 'react'
import "./menu.css"
import { Link } from 'react-router-dom';


function DishCard({title,img,describe,btntit,Price} ) {
  console.log(img)

  return (
    <div  className='dishes'>
      <Card   className='dishcolor'  sx={{ maxWidth: 335 }}>
                <CardMedia 
                    sx={{ height: 200 }}
                    image={img} 
                />
                  <CardContent> 
                  <div className='dishPrice'>
                    <Typography gutterBottom variant="h5"  >
                  {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" 
                    color='myColor.dark'
                    pt={1} sx={{ fontSize: 15 , fontWeight:700 }}>
                  {Price}
                    </Typography>
                    </div>
                    <Typography  variant="body2" color="text.secondary" height={75}>
                 `  {describe}
                    </Typography>
                </CardContent>
                <CardActions>
                <Link to="/Order" state={{title}} className='menuBtnLink'>    
                <Button className='menuBtn' variant="contained"  color="myColor">{btntit} 
            
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 20  }}></KeyboardDoubleArrowDownIcon>
                </Button>
                </Link>
                </CardActions>
        </Card> 
    </div>
  )
}

export default DishCard
