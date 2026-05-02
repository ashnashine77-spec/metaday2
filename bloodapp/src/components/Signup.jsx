import React from 'react'
import { Button, TextField, Box, InputAdornment } from '@mui/material'
import { 
  Person, 
  Phone, 
  Email,
  Lock 
} from '@mui/icons-material';
const Signup = () => {
  return (
     <Box sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>SignUp</h2>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
            },
          }}
        />
        
       <TextField 
         label="Phone Number" 
         variant="outlined" 
         fullWidth
         sx={{ mb: 2 }}
         slotProps={{
           input: {
             startAdornment: <InputAdornment position="start"><Phone /></InputAdornment>,
           },
        }}
      />
    
     <TextField 
       label="Email" 
       variant="outlined" 
       fullWidth
       sx={{ mb: 2 }}
       slotProps={{
        input: {
         startAdornment: <InputAdornment position="start"><Email /></InputAdornment>,
        },
       }}
     />

      <TextField 
         label="Password" 
         variant="outlined" 
         type="password"
         fullWidth
         sx={{ mb: 3 }}
         slotProps={{
          input: {
           startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
          },
         }}
      />
      
     <Button variant="contained" size="large" fullWidth>
        Submit
     </Button>
    </Box>
        );
      };
      
      export default Signup;