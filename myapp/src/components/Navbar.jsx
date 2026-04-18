import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
               <h3>MyApp</h3> &nbsp;
               <Link to="/login">
               <Button variant="contained" color="success">login</Button>
               </Link> &nbsp;

               <Link to="/S">
               <Button variant="contained" color="error">Signup</Button>
               </Link> &nbsp;
               
               <Link to="/state">
               <Button variant="contained" color="success">State</Button>
               </Link> &nbsp;

               <Link to="/n">
               <Button variant="contained" color="error">Name</Button>
               </Link> &nbsp;

               <Link to="/api">
               <Button variant="contained" color="success">Api</Button>
               </Link> &nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar