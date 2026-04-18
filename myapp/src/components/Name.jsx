import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var[b,setb]=useState()

    const inpt1 = () => {
       setb("react")
    }
    const inpt2 = () => {
       setb("angular")
    }
    const inpt3 = () => {
       setb("python")
    }
    useEffect( () => {
      inpt2()
    },[])
  return (
    <div>
        <h3>Heyy {b}</h3>
        <Button variant='contained' color='error' onClick={inpt1}>react</Button>
        &nbsp;&nbsp;
        <Button variant='contained' color='secondary' onClick={inpt2}>angular</Button>
        &nbsp;&nbsp;
        <Button variant='contained' color='success' onClick={inpt3}>python</Button>
        &nbsp;&nbsp;
    </div>
  )
}

export default Name