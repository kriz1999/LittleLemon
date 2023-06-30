
import { Button, Container,   Grid,  TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './form.css'
import SendIcon from '@mui/icons-material/Send';


function Login() {
  const handle =(e) => {
    e.preventDefault() 
    setDataError(false)
    setTimeError(false)
    setNumError(false)

    if (data && time  && num) {



    setGrid(
     <div className='reservation'> 
      <div className='respons1'>Log In successful</div>

    </div>
    
  
     )

    }
    if (data ===""){
      setDataError(true)
    }
    if (time ===""){
      setTimeError(true)
    }
    if (num ===""){
      setNumError(true)
    }
  }
   const [data, setData] =useState('')
   const [time, setTime] =useState('')
   const [num, setNum] =useState('')

   const [dataError, setDataError] =useState(false)
   const [timeError, setTimeError] =useState(false)
   const [numError, setNumError] =useState(false)

   const [grid , setGrid] = useState('')
  return (
    <div>
      <Container maxWidth='md'  >
      <Grid container spacing={2}   
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="formappLogin"
           >
      
        <Grid xs={8} sm={10} md={12} lg={12} xl={12} className='formGrid'>
         <Typography color='myColor.main' variant='h4' fontWeight='bold'>Log In</Typography>
        </Grid>
        <Grid xs={8} sm={10} md={12} lg={12} xl={12} className='formGrid'>
        <form noValidate autoComplete='off' onSubmit={handle} className='form'>
                    <TextField className='formInput' 
                    label="Full Name"
                    variant="filled"
                    color="success" 
                    fullWidth={true}
                    onChange={(e)=>{
                    setData(e.target.value)
                    }}
                    required
                    error={dataError}
                    />
              
                    <TextField className='formInput' 
                    type="email"   
                    variant="filled"
                    color='success'
                      label="Email"
                     fullWidth={true}
                     onChange={(e)=>{
                      setTime(e.target.value)
                    }}
                    required
                    error={timeError}
                    />
                    <TextField 
                        variant="filled"
                    className='formInput' 
                      type="password"
                      InputProps={{ inputProps: {  max: 12, min: 1   } }}
                      label="Password"
                      color='success'
                      fullWidth={true}
                      onChange={(e)=>{
                      setNum(e.target.value)
                    }}
                    required
                    error={numError}
                      />


                    <Button className='formBtn'
                     type='submit' 
                     color='myColor'
                     variant="contained" endIcon={<SendIcon/>}
                 >Submit</Button>
                  </form>
        </Grid>
        <Grid item xs={8} sm={10} md={12} lg={12} xl={12}  className='formGrid2'>
            {grid}
        </Grid>
      
      </Grid>

        
      </Container>   
    </div>
  )
}

export default Login
