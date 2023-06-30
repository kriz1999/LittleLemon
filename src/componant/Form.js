
import { Button, Container, FormControl,  Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './form.css'
import SendIcon from '@mui/icons-material/Send';


function Form() {
  const handle =(e) => {
    e.preventDefault() 
    setDataError(false)
    setTimeError(false)
    setNumError(false)

    if (data && time  && num) {

    console.log(data)
    console.log(time)
    console.log(num)
    console.log(occ)

    setGrid(
     <div className='reservation'> 
      <div className='respons1'>Reservation successful</div>
      <div className='respons2'>In {data}   At {time}</div>
      <div className='respons3'>to {num} member/s  For {occ} </div>
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
   const [occ, setOcc] =useState('')

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
          className="formapp"
           >
      
        <Grid xs={8} sm={10} md={12} lg={12} xl={12} className='formGrid'>
         <Typography color='myColor.main' variant='h4' fontWeight='bold'>Reservations</Typography>
        </Grid>
        <Grid xs={8} sm={10} md={12} lg={12} xl={12} className='formGrid'>
        <form noValidate autoComplete='off' onSubmit={handle} className='form'>
                    <TextField className='formInput' 
                    InputLabelProps={{ shrink: true }}
                    type="date"  
                    label="Choose date"
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
                    type="time"   
                    variant="filled"
                    color='success'
                      label="Choose time"
                     fullWidth={true}
                     InputLabelProps={{ shrink: true }}
                     onChange={(e)=>{
                      setTime(e.target.value)
                    }}
                    required
                    error={timeError}
                    />
                    <TextField 
                        variant="filled"
                    className='formInput' 
                      type="number"
                      InputProps={{ inputProps: {  max: 12, min: 1   } }}
                      label="Number of guests"
                      color='success'
                      fullWidth={true}
                      onChange={(e)=>{
                      setNum(e.target.value)
                    }}
                    required
                    error={numError}
                      />



                  <FormControl 
                  fullWidth={true} 
                  variant="filled"
                  color='success'
                  className='formInputSelect'  >
                  <InputLabel id="demo-simple-select-helper-label">Occasion</InputLabel>
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
  
                    <MenuItem value={"None"}>None</MenuItem>
                    <MenuItem value={"Birthday"}>Birthday</MenuItem>
                    <MenuItem value={"Anniversary"}>Anniversary</MenuItem>
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

export default Form
