import { Button, Container, Grid, Icon } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import logo from "../icons/logo.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {

  return (
    <div className='footerApp'>
      <Container maxWidth='lg'>
        <Grid container  className='footContain'  >
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className='imgFooter'> 
              <img src={logo} alt="logo"></img>
            </Grid>
            <Grid  item xs={12} sm={12} md={9} lg={9} xl={9} 
              className='btnFooterNav'  
              textAlign='center'
           
              mb={2} mt={2} 
           >
                <Grid container direction='row'>
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} >
                      <Link to="/LittleLemon">
                          <Button  className='btnFooterNavChaild'> Home </Button>  
                      </Link>
                </Grid>    
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} >
                  <Button  href='/LittleLemon#About' className='btnFooterNavChaild'> About </Button>         
                </Grid>     
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} >
                <Button href='/LittleLemon#Menu' className='btnFooterNavChaild'> Menu </Button> 
                </Grid> 
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} >
                <Link to="/Form">
                      <Button className='btnFooterNavChaild'> Reservations </Button>  
                      </Link>
                </Grid> 
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} >
                <Button href='/LittleLemon#Menu' className='btnFooterNavChaild'> Order  </Button>   
                </Grid> 
                <Grid item xs={4} sm={4} md={2} lg={2} xl={2} >
                  
              
                  <Link   to="/Login">
                  <Button  className='btnFooterNavChaild'> Login </Button>  
                  </Link>

             
                </Grid>         
                        
                   
                    
                 </Grid>
                 
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='btnContact'  mb={2} mt={2}  >
              <Grid container maxWidth='lg'   justifyContent="space-evenly">
                    <Grid className='contantLitter' item xs={4} sm={4}  md={4} lg={4} xl={4}  textAlign='center' >
                       <span>C</span><span>ontact:</span> 
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}  textAlign='center'>
                          <Grid container >
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  textAlign='start'> 
                                <Button  className='btnContantBtns'>Call: +123456789 </Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  textAlign='start'>  
                                <Button className='btnContantBtns'>Email: 123@gmail.com</Button>
                            </Grid>
                          </Grid>
                      </Grid>
                
             
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  mb={4} mt={8} textAlign='center'>
            <div className='line'></div>
            <Button><FacebookIcon className='FacebookIcon'></FacebookIcon></Button>
            <Button><InstagramIcon className='InstagramIcon'></InstagramIcon></Button>
            <Button><WhatsAppIcon className='WhatsAppIcon'></WhatsAppIcon></Button>
            <Button><TwitterIcon className='TwitterIcon'></TwitterIcon></Button>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
