import { Box, Typography, Button, Container, Stack, Grid } from '@mui/material';
import myBloodImage from '../assets/blood.png';
import myBlueImage from '../assets/lightblue.png';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimerIcon from '@mui/icons-material/Timer';
import GroupsIcon from '@mui/icons-material/Groups';
import { FavoriteBorder, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import { Facebook, Instagram, Mail} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Paper } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(58, 112, 133, 0.7), rgba(182, 48, 48, 0.7)), url(${myBloodImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          p: 3,
        }}
      >
        <Typography variant="h1" fontWeight="bold">
          Hey Kerala!!
        </Typography>
          <br />
        <Typography variant="h2" fontWeight="bold">
          Your small act of kindness can create a lifetime of hope.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Every two seconds, someone in India needs blood. Despite the demand,
          <br />
          less than 1% of the population donates blood annually.
        </Typography>

        <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
          BloodBond connects willing blood donors with individuals in urgent need,
          <br />
          building a reliable and compassionate support network.
        </Typography>

        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
         <Button 
  component={Link} 
  to="/DR?tab=donate"
  variant="outlined" 
  color="inherit"
>
  Register to Donate
</Button>
          <Button 
  component={Link} 
  to="/DR?tab=request" 
  variant="contained" 
  color="error"
>
  Request Blood
</Button>
        </Box>

        <Stack direction="row" spacing={4} justifycontent="center" sx={{ mt: 6 }}>
          <Box>
            <Typography variant="h4" fontWeight="bold">1500+</Typography>
            <Typography variant="caption">Voluntary Blood Donors</Typography>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold">450+</Typography>
            <Typography variant="caption">Blood Units Assisted</Typography>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold">1000+</Typography>
            <Typography variant="caption">Units Needed Every Day</Typography>
          </Box>
        </Stack>
      </Box>

      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          How BloodBond Works
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Our mission is to inspire humanity by organizing blood donation drives and
          <br />
          ensuring timely access to blood for those in need.
        </Typography>
       <br />
     <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
    
    {/* Step 1 */}
    <Box sx={{ flex: 1, p: 3, border: '1px solid #eee', borderRadius: 2 }}>
      <Typography variant="h3" color="error" fontWeight="bold">1</Typography>
      <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Register as Donor</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Sign up with your details, blood group, and contact information. Join our network of life-savers.
      </Typography>
    </Box>

    {/* Step 2 */}
    <Box sx={{ flex: 1, p: 3, border: '1px solid #eee', borderRadius: 2 }}>
      <Typography variant="h3" color="error" fontWeight="bold">2</Typography>
      <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Get Notified</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Receive notifications when your blood type is needed urgently in your area or nearby hospitals.
      </Typography>
    </Box>

    {/* Step 3 */}
    <Box sx={{ flex: 1, p: 3, border: '1px solid #eee', borderRadius: 2 }}>
      <Typography variant="h3" color="error" fontWeight="bold">3</Typography>
      <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Save Lives</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Donate blood and make a direct impact. Every donation can save up to three lives.
      </Typography>
    </Box>

  </Box> 
  <br />
  <Typography variant="h4" fontWeight="bold" gutterBottom>
  Our Impact
</Typography>

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
    <br /><br />
     <Box
        sx={{
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(173, 105, 179, 0.28)), url(${myBlueImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'right',
          alignItems: 'right',
          color: 'black',
          textAlign: 'left',
          p: 3,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Your blood can be a lifeline for:
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          Realizing that your donation gives someone a second chance at life <br /> highlights its unparalleled importance.
        </Typography>
     
        <ul>
          <li><Typography variant="h5" fontWeight="bold" color="error">Accident victims</Typography></li>
          <Typography>Road accidents in India claim over 150,000 lives annually, and many victims need emergency blood transfusions.</Typography>
        </ul>
         
        <ul>
          <li><Typography variant="h5" fontWeight="bold" color="error">Cancer patients</Typography></li>
          <Typography>Patients undergoing chemotherapy often require 8-10 units of blood per treatment cycle.</Typography>
        </ul>

        <ul>
          <li><Typography variant="h5" fontWeight="bold" color="error">Individuals undergoing major surgeries</Typography></li>
          <Typography>A single open-heart surgery can require 4-6 units of blood.</Typography>
        </ul>

        <ul>
          <li><Typography variant="h5" fontWeight="bold" color="error">Thalassemia patients</Typography></li>
          <Typography>More than 100,000 people in India suffer from Thalassemia and require regular blood transfusions every 2-4 weeks to survive.</Typography>
        </ul>

        <ul>
          <li><Typography variant="h5" fontWeight="bold" color="error">Patients with chronic illnesses</Typography></li>
          <Typography>Conditions like sickle cell anaemia and haemophilia require frequent blood transfusions to manage symptoms and maintain quality of life.</Typography>
        </ul>
      </Box>

      <br />
<Typography variant="h4" fontWeight="bold">
  Have you heard...?
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
  <Paper
    elevation={3}
    sx={{
      flex: 1,
      p: 2,
      cursor: 'pointer',
      transition: '0.3s',
      borderRadius: 3,

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',

      border: '2px solid transparent',
      height: '100%',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 8,
        borderColor: 'primary.main',
      },
    }}
  >
    <BloodtypeIcon color="error" sx={{ fontSize: 40 }} />
    <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }} color="success">
      A single donation can save up to three lives because whole blood is separated into three vital components: red blood cells, plasma, and platelets.
    </Typography>
  </Paper>

  {/* Card 2 */}
  <Paper
    elevation={3}
    sx={{
      flex: 1,
      p: 2,
      cursor: 'pointer',
      transition: '0.3s',
      borderRadius: 3,

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',

      border: '2px solid transparent',
      height: '100%',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 8,
        borderColor: 'primary.main',
      },
    }}
  >
    <TimerIcon color="info" sx={{ fontSize: 40 }} />
    <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }} color="success">
      Although the actual process of drawing whole blood takes only 8 to 10 minutes, the impact of your generosity can last a lifetime for those in need.
    </Typography>
  </Paper>

</Box>

<br />

<Box
  sx={{
    display: 'flex',
    gap: 3,
    alignItems: 'stretch',
    flexDirection: { xs: 'column', md: 'row' },
  }}
>

  {/* Card 3 */}
  <Paper
    elevation={3}
    sx={{
      flex: 1,
      p: 2,
      cursor: 'pointer',
      transition: '0.3s',
      borderRadius: 3,

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',

      border: '2px solid transparent',
      height: '100%',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 8,
        borderColor: 'primary.main',
      },
    }}
  >
    <GroupsIcon color="secondary" sx={{ fontSize: 40 }} />
    <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }} color="success">
      Healthy individuals can safely donate whole blood every 8 to 12 weeks, as the body has an incredible capacity to replace the donated cells and fluids.
    </Typography>
  </Paper>

  {/* Card 4 */}
  <Paper
    elevation={3}
    sx={{
      flex: 1,
      p: 2,
      cursor: 'pointer',
      transition: '0.3s',
      borderRadius: 3,

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',

      border: '2px solid transparent',
      height: '100%',

      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 8,
        borderColor: 'primary.main',
      },
    }}
  >
    <VolunteerActivismIcon color="warning" sx={{ fontSize: 40 }} />
    <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }} color="success">
      By choosing to donate, you are providing an essential resource that cannot be manufactured, making a powerful contribution to the health and well-being of your community.
    </Typography>
  </Paper>

</Box>
    <br />
      <Box
        sx={{
          height: '20vh',
          backgroundImage: `linear-gradient(rgba(58, 112, 133, 0.7), rgba(182, 48, 48, 0.7)), url(${myBlueImage})`,
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
        <br />
        <Typography variant="h5" fontWeight="bold">
          Small act, big impact—donate blood today!
        </Typography>
        <Typography variant="h8" fontWeight="bold">
          With collective compassion and determination, we can safeguard precious lives <br /> and champion a brighter future across the state.
        </Typography>
        <br />
      </Box>
      <br />
   <Typography variant="h4" fontWeight="bold" >
          What are the things we can all do to make a difference ?
    </Typography>
    <br />
     <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
    
    {/* Step 1 */}
     <Box sx={{ flex: 2, p: 3, border: '4px solid #eee', borderRadius: 2, textAlign: 'center' }}>
          <FavoriteBorder color="error" sx={{ fontSize: 40 }} />
          <Typography variant="h5" color="success" fontWeight="bold">Be a Donor</Typography>
          <Typography variant="h9" fontWeight="bold" sx={{ mt: 1 }}>Stay ready to donate blood in emergencies.</Typography>
          <br /><br />
          <Button 
  component={Link} 
  to="/DR?tab=donate"
  variant="contained" 
  color="error"
>
  Donate Now
</Button>
    </Box>

    {/* Step 2 */}
        <Box sx={{ flex: 2, p: 3, border: '4px solid #eee', borderRadius: 2, textAlign: 'center' }}>
          <GroupsIcon color="secondary" sx={{ fontSize: 40 }} />
          <Typography variant="h5" color="success" fontWeight="bold">Volunteer</Typography>
          <Typography variant="h9" fontWeight="bold" sx={{ mt: 1 }}>Organize blood donation camps.</Typography>
          <br /><br />
          <Button component={Link} to="/v" variant='contained' color='secondary'>Join as Volunteer</Button>
        </Box>

    {/* Step 3 */}
       <Box sx={{ flex: 2, p: 3, border: '4px solid #eee', borderRadius: 2, textAlign: 'center' }}>
          <Phone color="info" sx={{ fontSize: 40 }} />
          <Typography variant="h5" color="success" fontWeight="bold">Make a Call</Typography>
          <Typography variant="h9" fontWeight="bold" sx={{ mt: 1 }}>Connect us with those who is in emergencies.</Typography>
          <br /><br />
          <Button component={Link} to="/C" variant='contained' color='info'>Contact now</Button>
        </Box>

    
    {/* Step 4 */}
     <Box sx={{ flex: 2, p: 3, border: '4px solid #eee', borderRadius: 2, textAlign: 'center' }}>
          <VolunteerActivismIcon color="warning" sx={{ fontSize: 40 }} />
          <Typography variant="h5" color="success" fontWeight="bold">Request Blood</Typography>
          <Typography variant="h9" fontWeight="bold" sx={{ mt: 1 }}>Inform us who is in urgent needs.</Typography>
          <br /><br />
          <Button 
  component={Link} 
  to="/DR?tab=request" 
  variant="contained" 
  color="warning"
>
  Request Blood
</Button>
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

      </Container>
    </>
  );
};

export default Home;