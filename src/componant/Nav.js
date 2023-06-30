import * as React from 'react';
import './Nav.css'

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../icons/logo.svg";
import { Link } from 'react-router-dom';
import { AppBar, Grid } from '@mui/material';



function Nav() {


  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return ( 
    <AppBar position="fixed" color="primary"   className='AppBar'>
    <div  className='NavContainer' >

      <Container maxWidth="lg"   >
        <Toolbar  className='navApp'  >
          <Grid container direction='row' className='nav'>
            <Grid item xs={3}>
               <img className="logo" src={logo} alt="logo" />
            </Grid>
            <Grid item md={9} sm={9}>
              <Box  className='btn-nav' sx={{ flexGrow: 1, display: { sm: 'none',xs: "none" ,md: 'flex' } }}>
                  <Link to="/LittleLemon">
                      <Button  className='btn-nav2'> Home </Button>  
                  </Link>
                  <Button  href='/LittleLemon#About' className='btn-nav2'> About </Button>         
                  <Button href='/LittleLemon#Menu' className='btn-nav2'> Menu </Button>    
                  <Link to="/Form">
                  <Button  className='btn-nav2'> Reservations </Button>  
                  </Link>
                  <Link to="/Login">
                  <Button  className='btn-nav2'> Login </Button>  
                  </Link>
               
                  <Button  href='/LittleLemon#Menu' className='btn-nav2'> Order </Button>  
              
                     
                   
              </Box>
            </Grid>
                        
                         <Box  className="menu" sx={{ flexGrow: 1, display: { sm: 'flex', xs: 'flex', md: 'none' }  }}>
                              <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                                >
                                <MenuIcon />
                                </IconButton>
                                <Menu
                           
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                   
                                    display: { xs: 'block', md: 'none' },
                                }}
                                >
                                <div className="open">
                                  <Link to="/LittleLemon" className='btn-nav3'>
                                    <Button  className='btn-nav3'> Home </Button>  
                                   </Link>
                                    <Button  href='/LittleLemon#About' className='btn-nav3'> About </Button>         
                                    <Button href='/LittleLemon#Menu' className='btn-nav3'> Menu </Button>    
                                    <Link to="/Form" className='btn-nav3'>
                                    <Button  className='btn-nav3'> Reservations </Button>  
                                    </Link>
                                    <Button href='/LittleLemon#Menu'  className='btn-nav3'> Order  </Button>         
                                    <Link to="/Login" className='btn-nav3'>
                                     <Button  className='btn-nav3'> Login </Button>  
                                   </Link>
                                  
                                  
                                    </div>
                           
                                </Menu>
                        </Box>
                       
          </Grid>
        </Toolbar>
      </Container>
    </div> 
    </AppBar>
  );
}
export default Nav;
