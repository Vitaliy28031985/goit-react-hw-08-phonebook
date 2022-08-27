import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export const NavContacts = () => {
   
   return (
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  <NavLink to='/contacts'
  style={{
    textDecoration: 'none',
  }}
  >   
<Button
  sx={{ my: 2, color: 'white', display: 'block' }}>
  CONTACTS
  </Button> 
  </NavLink>
</Box>
   );
};