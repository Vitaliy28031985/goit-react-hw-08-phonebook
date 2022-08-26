import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { useLogoutMutation } from '../../../redux/authApi';
// import { unsetCredentials } from '../../../redux/authSlice';



export const UserMenu = () => {
   const [setAnchorElNav] = React.useState(null);

     const handleCloseNavMenu = () => {
       setAnchorElNav(null);
     };

   return (
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
<Typography
variant="h6"
noWrap
component="a"
sx={{
fontFamily: 'monospace',
marginTop: 2.1,
  marginLeft: 5,
  marginRight: 2,
fontWeight: 400,
color: 'white',
textDecoration: 'none',
}}>Vitaliy@i.ua</Typography>

<NavLink to='/login'
  style={{
    textDecoration: 'none',
  }}
  >         
  <Button
  onClick={handleCloseNavMenu}
  sx={{ my: 2, color: 'white', display: 'block' }}>
  Logout
  </Button>
  </NavLink>
  
</Box>
   );
};