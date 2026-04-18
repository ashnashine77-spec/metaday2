import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setname]=useState("Ashna")
    var[a,seta]=useState()
    const inputhandler = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const submithandler =() =>{
        seta(name)
    }
  return (
    <div>
        <h2>Hello {a} !</h2>
        <TextField label="Enter your name" variant='outlined' onChange={inputhandler}/> &nbsp;
        <Button variant='text' onClick={submithandler}>Enter</Button>
    </div>
  )
}

export default StateBasics