import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

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
 <p style={{
fontFamily: 'monospace',
fontWeight: 700,
fontSize: 25,
marginRight: 20,
marginTop: 20,
}}
>Phonebook</p>             
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

<NavLink to='/'
style={{
  textDecoration: 'none',
}}
>         
<Button
  sx={{ my: 2, color: 'white', display: 'block' }}>
  HOME
  </Button>
  </NavLink>

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


