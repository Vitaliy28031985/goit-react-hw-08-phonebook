import * as React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {NavContacts} from './NavContacts/NavContacts';
import {AuthNav} from './AuthNav/AuthNav';
import {UserMenu} from './UserMenu/UserMenu';

import { selectIsLoggedIn } from '../../redux/authSlice';


const ContactsAppBar = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
<AppBar position="relative"
sx={{
position: 'fixed',
top: 0,
right:0,
    }}>
<Container maxWidth="sm">
<Toolbar disableGutters>

<Typography
variant="h6"
noWrap
component="a"
href="/"
sx={{
position: 'fixed',
top: 16,
right:1000,
mr: 2,
display: { xs: 'none', md: 'flex' },
fontFamily: 'monospace',
fontWeight: 700,
letterSpacing: '.3rem',
color: 'white',
textDecoration: 'none',
}}>Phonebook</Typography>
              
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
{isLoggedIn && (<NavContacts/>)}
 {!isLoggedIn && (<AuthNav/>)} 

{isLoggedIn && (<UserMenu/>)}

 </Box> 
        
</Toolbar>
</Container>
</AppBar>
  );
};
export default ContactsAppBar;


