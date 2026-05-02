import React from 'react';
import { AppBar, Button, Toolbar, Box, Typography,CssBaseline, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 6 : 0,
  });
}

const Navbar = (props) => {
  return (
    <>
     <CssBaseline />
      <ElevationScroll {...props}>
    <AppBar position="sticky" sx={{ backgroundColor: 'black', backgroundImage: 'unset' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <BloodtypeIcon color="error" fontSize="large" />
          
          {/* Column Box to stack text vertically */}
          <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
              BloodBond
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>
              Blood Donation Network
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mx: 1 }} />
        <Button component={Link} to="/h" variant="text" color="error">
          Home
        </Button>
        <Button component={Link} to="/a" variant="text" color="error">
          About
        </Button>
        <Button component={Link} to="/DR" variant="text" color="error">
          Donate/Request
        </Button>
        <Button component={Link} to="/C" variant="text" color="error">
          Contact
        </Button>
        <Button component={Link} to="/v" variant="text" color="error">
          Volunteer
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        
        <Button component={Link} to="/login" variant="contained" color="success" sx={{ mr: 1 }}>
          Login
        </Button>
        <Button component={Link} to="/S" variant="contained" color="error">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  </ElevationScroll>
  </>
  );
};

export default Navbar;
