import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLogoutMutation } from '../../../redux/authApi';
import { selectUser, unsetCredentials } from '../../../redux/authSlice';
import { contactsApi } from '../../../redux/contactsSlice';



export const UserMenu = () => {
   const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  const user = useSelector(selectUser);



     const handleCloseNavMenu = async () => {
     await logout();
    dispatch(unsetCredentials());
    dispatch(contactsApi.util.resetApiState());

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
}}>{user.email}</Typography>

<NavLink to='/login'
  style={{
    textDecoration: 'none',
  }}
  >         
  <Button
  onClick={handleCloseNavMenu}
  disabled={isLoading}
  sx={{ my: 2, color: 'white', display: 'block' }}>
  Logout
  </Button>
  </NavLink>
  
</Box>
   );
};