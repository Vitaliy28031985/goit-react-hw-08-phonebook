import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <div
style={{
  marginTop: 150,
  marginLeft: 500,
  width: 900,
 }}>
   <form>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >

      <TextField fullWidth label="Email" id="Email" />
      <TextField 
      sx={{
         marginTop: 3,
       }}
      fullWidth label="Password" id="Password" />
    </Box>

    <Button variant="contained"
     type="submit"
     sx={{
      marginTop: 3,
    }}
    >LOGIN</Button>
    </form>
    </div>
  );
}