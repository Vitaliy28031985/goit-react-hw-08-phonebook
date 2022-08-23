import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';




const ContactsAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);




  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
mr: 2,
display: { xs: 'none', md: 'flex' },
fontFamily: 'monospace',
fontWeight: 700,
letterSpacing: '.3rem',
color: 'white',
textDecoration: 'none',
}}>Phonebook</Typography>
              

<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
<NavLink to='/'
style={{
  textDecoration: 'none',
}}
>         
<Button
  onClick={handleCloseNavMenu}
  sx={{ my: 2, color: 'white', display: 'block' }}>
  HOME
  </Button>
  </NavLink>

  <NavLink to='/contacts'
  style={{
    textDecoration: 'none',
  }}
  >   
<Button
  onClick={handleCloseNavMenu}
  sx={{ my: 2, color: 'white', display: 'block' }}>
  CONTACTS
  </Button> 
  </NavLink>

  <NavLink to='/login'
  style={{
    textDecoration: 'none',
  }}
  >         
  <Button
  onClick={handleCloseNavMenu}
  sx={{ my: 2, color: 'white', display: 'block' }}>
  LOGIN
  </Button>
  </NavLink>

  <NavLink to='/register'
  style={{
    textDecoration: 'none',
  }}
  >
  <Button
  onClick={handleCloseNavMenu}
  sx={{ my: 2, color: 'white', display: 'block' }}>
  REGISTER
  </Button>
</NavLink>
 </Box> 
         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ContactsAppBar;


