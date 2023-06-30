
import { Button, Container, FormControl,  Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './form.css'
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router';




function Order() {
  const location = useLocation();
const propsData = location.state;
console.log(propsData);


  const handle =(e) => {
    e.preventDefault() 
    setDataError(false)
    setTimeError(false)


    if (data && time  ) {

    setGrid(
     <div className='reservation'> 
      <div className='respons1'>Order successful</div>
      <div className='respons2'>The order is {data}  meal/s  of {propsData.title}</div>
      <div className='respons3'>Will Delivery to {time} </div>
    </div>
    
  
     )

    }
    if (data ===""){
      setDataError(true)
    }
    if (time ===""){
      setTimeError(true)
    }

  }
   const [data, setData] =useState('')
   const [time, setTime] =useState('')
   const [occ, setOcc] =useState('')

   const [dataError, setDataError] =useState(false)
   const [timeError, setTimeError] =useState(false)

   const [grid , setGrid] = useState('')
  return (
    <div>
      <Container maxWidth='md'  >
      <Grid container spacing={2}   
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="formapp"
           >
      
        <Grid xs={8} sm={10} md={12} lg={12} xl={12} className='formGrid'>
         <Typography color='myColor.main' variant='h6' fontWeight='bold'>Order <span className='spanOrder'>{propsData.title} </span></Typography>
        </Grid>
        <Grid xs={8} sm={10} md={12} lg={12} xl={12} className='formGrid'>
        <form noValidate autoComplete='off' onSubmit={handle} className='form'>
                    <TextField className='formInput' 
                    type="number"   
                    label="How many meals ?"
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
           
                    variant="filled"
                    color='success'
                      label="the address"
                     fullWidth={true}
                     onChange={(e)=>{
                      setTime(e.target.value)
                    }}
                    required
                    error={timeError}
                    />
                  <FormControl 
                  fullWidth={true} 
                  variant="filled"
                  color='success'
                  className='formInputSelect'  >
                  <InputLabel id="demo-simple-select-helper-label">payment method</InputLabel>
                  <Select
                        onChange={(e)=>{
                      setOcc(e.target.value)
                    }}
                          variant="filled"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    label="Occasion"
                    // onChange={handleChange}
                  >
  
                    <MenuItem value={"Cash"}>Cash</MenuItem>
                    <MenuItem value={"Paypal"}>Paypal</MenuItem>
                    <MenuItem value={"Bank Account"}>Bank Account</MenuItem>
                  </Select>
                </FormControl>

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

export default Order
