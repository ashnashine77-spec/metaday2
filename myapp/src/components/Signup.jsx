import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
       <h3>Signup</h3>
       <TextField label="name" variant="outlined"/><br/>
       <TextField label="age" variant="filled"/><br/>
       <TextField label="mark" variant="standard"/><br/><br />
       <Button variant="contained">Contained</Button>
    </div>
  )
}

export default Signup