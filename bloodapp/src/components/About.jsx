import React from 'react'
import myBlueImage from '../assets/lightblue.png';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';
import { Timer, Groups, Favorite, Facebook, Instagram, Mail, Phone  } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { IconButton } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = () => {
  return (
    <>
        <Box
        sx={{
          height: '20vh',
          backgroundImage: `linear-gradient(rgba(138, 196, 230, 0.28)), url(${myBlueImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          textAlign: 'center',
          p: 3,
        }}
      >
       <Typography variant="h3" fontWeight="bold">
          About BloodBond
       </Typography>
       <Typography variant="h6" fontWeight="bold">
        Creating a dependable and empathetic network <br />that links voluntary blood donors with those in critical need.
       </Typography>
      </Box>
      <br />
      <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" color='warning'>
          What Drives Us
       </Typography>
       <br />
       <Typography variant="body1" fontWeight="bold">
         To promote compassion by coordinating blood donation drives and ensuring timely access to blood for anyone in need,<br />irrespective of religion, caste, creed, or social status,thereby saving lives and building stronger communities.
       </Typography>
       </Box>
       <br />
        <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" color='warning'>
          Our Aspiration 
       </Typography>
       <br />
       <Typography variant="body1" fontWeight="bold">
         To build a future where every patient can access life-saving blood,<br />and communities are inspired to support one another through regular, voluntary donations.
       </Typography>
       </Box>
       <br />
       <Typography variant="h5" fontWeight="bold" color='warning'>
          Our Journey
    </Typography>
    <br />
     <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'row', md: 'column' } }}>
    
    {/* Step 1 */}
    <Box sx={{ flex: 100, p: 1, border: '4px solid #eee', borderRadius: 1, textAlign: 'left'}}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
       <Groups color="error" sx={{ fontSize: 30 }} /> &nbsp;
       <Typography variant="h6" fontWeight="bold">2014-The Begining</Typography>
       </Box>
      <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }} color="success">Every great movement begins with a purpose. BloodBond started as a response to urgent cries for help—transforming compassion into action. Today, it stands as a symbol of hope, connecting hearts and saving lives through the power of giving.</Typography>
    </Box>

    {/* Step 2 */}
    <Box sx={{ flex: 100, p: 1, border: '4px solid #eee', borderRadius: 1, textAlign: 'left'}}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
       <Timer color="info" sx={{ fontSize: 30 }} />
       <Typography variant="h6" fontWeight="bold" >The Growth of a Lifeline</Typography>
      </Box>
      <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }} color="success">Through every connection made and every life saved, BloodBond continues to make a difference. It inspires people to give selflessly, supports those in critical need, and fosters a spirit of unity and humanity across communities.</Typography>
    </Box>
    {/* Step 3 */}
    <Box sx={{ flex: 100, p: 1, border: '4px solid #eee', borderRadius: 1, textAlign: 'left' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
       <Favorite color="error" sx={{ fontSize: 30 }} />
       <Typography variant="h6" fontWeight="bold" >An Ongoing Mission</Typography>
      </Box>
      <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }} color="success">And our journey continues—driven by compassion, strengthened by every life we touch, and guided by an unwavering commitment to serve those in need.</Typography>
    </Box>
    </Box>

    <br />
  <Typography variant="h5" fontWeight="bold" color='warning'>
  Our Journey so far
</Typography>
<br />
<Box
  sx={{
    display: 'flex',
    gap: 3,
    alignItems: 'stretch',
    flexDirection: { xs: 'column', md: 'row' },
  }}
>

  {/* Card 1 */}
  <Box
    sx={{
      flex: 1,
      p: 3,
      border: '2px solid #e0e0e0',
      borderRadius: 3,
      textAlign: 'center',
      cursor: 'pointer',
      transition: '0.3s',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 6,
        borderColor: 'primary.main',
      },
    }}
  >
    <BloodtypeIcon color="error" sx={{ fontSize: 45, mb: 1 }} />
    <Typography variant="h4" color="success" fontWeight="bold">
      10000+
    </Typography>
    <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
      Units Donated
    </Typography>
  </Box>

  {/* Card 2 */}
  <Box
    sx={{
      flex: 1,
      p: 3,
      border: '2px solid #e0e0e0',
      borderRadius: 3,
      textAlign: 'center',
      cursor: 'pointer',
      transition: '0.3s',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 6,
        borderColor: 'primary.main',
      },
    }}
  >
    <VolunteerActivismIcon color="error" sx={{ fontSize: 45, mb: 1 }} />
    <Typography variant="h4" color="success" fontWeight="bold">
      1500+
    </Typography>
    <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
      Voluntary Blood Donors
    </Typography>
  </Box>

  {/* Card 3 */}
  <Box
    sx={{
      flex: 1,
      p: 3,
      border: '2px solid #e0e0e0',
      borderRadius: 3,
      textAlign: 'center',
      cursor: 'pointer',
      transition: '0.3s',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 6,
        borderColor: 'primary.main',
      },
    }}
  >
    <HandshakeIcon color="error" sx={{ fontSize: 45, mb: 1 }} />
    <Typography variant="h4" color="success" fontWeight="bold">
      450+
    </Typography>
    <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
      Blood Units Assisted
    </Typography>
  </Box>

  {/* Card 4 */}
  <Box
    sx={{
      flex: 1,
      p: 3,
      border: '2px solid #e0e0e0',
      borderRadius: 3,
      textAlign: 'center',
      cursor: 'pointer',
      transition: '0.3s',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 6,
        borderColor: 'primary.main',
      },
    }}
  >
    <LocationOnIcon color="error" sx={{ fontSize: 45, mb: 1 }} />
    <Typography variant="h4" color="success" fontWeight="bold">
      10+
    </Typography>
    <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
      Areas Covered
    </Typography>
  </Box>
</Box>

     <br />
     <Box sx={{ bgcolor: '#001e3c', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
        <Grid container spacing={3}>

          {/* About */}
          <Grid xs={12} md={4}>
            <Box sx={{ display: 'flex',alignItems: 'center' }}>
           <BloodtypeIcon color='error' sx={{ mr: 1 }}/>
            <Typography variant="h6" fontWeight="bold">
              BloodBond
            </Typography>
          </Box>
            <Typography variant="body2">
              Helping people through <br />blood donation and social service.
            </Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton color="inherit"><Facebook /></IconButton>
              <IconButton color="inherit"><Instagram /></IconButton>
            </Box>
          </Grid>

          {/* Links */}
          <Grid xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">Links</Typography>
            <Link component={RouterLink} to="/a" color="inherit">About</Link><br />
            <Link component={RouterLink} to="/DR" color="inherit">Donate</Link><br />
            <Link component={RouterLink} to="/v" color="inherit">Volunteer</Link>
          </Grid>

          {/* Contact */}
        <Grid xs={12} md={4}>
  <Typography variant="h6" fontWeight="bold">
    Contact
  </Typography>

  <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>

    <Box sx={{ display: 'flex',alignItems: 'center' }}>
      <Phone sx={{ mr: 1 }} />
      <Typography variant="body2">9876543210</Typography>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Mail sx={{ mr: 1 }} />
      <Typography variant="body2">sss@gmail.com</Typography>
    </Box>

  </Box>
</Grid>

        </Grid>

        {/* Bottom */}
        <Typography variant="body2" align="center" sx={{ mt: 3, opacity: 0.6 }}>
          © 2026 BloodBond.All rights reserved
        </Typography>
      </Container>
    </Box>
    </>
  );
};

export default About;