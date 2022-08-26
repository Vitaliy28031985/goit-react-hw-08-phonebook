import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useLoginMutation} from '../../redux/authApi';
import {setCredentials} from '../../redux/authSlice';


export default function Login() {
  const [loginEl, setLoginEl] = useState({
  email: '',
  password: ''
  });

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();


  const handleChange = ({ target: { name, value } }) => {
    setLoginEl(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const dataRespons = await login(loginEl).unwrap();
      dispatch(setCredentials(dataRespons));
    } catch (error) {
      alert(`User with the email: ${loginEl.email} does not exist!`, error);
    }
    setLoginEl({
      email: '',
      password: '',
    });
  };

  return (
    <div
style={{
  marginTop: 150,
  marginLeft: 500,
  width: 900,
 }}>
   <form onSubmit={handleSubmit}>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >

      <TextField fullWidth 
      label="Email" 
      id="email" 
      type="email"
      name="email"
      onChange={handleChange}
      value={loginEl.email}
      />
      <TextField 
      sx={{
         marginTop: 3,
       }}
      fullWidth 
      label="Password" 
      id="password"
      type="password"
      name="password"
      onChange={handleChange}
      value={loginEl.password}
      />
    </Box>

    <Button variant="contained"
     type="submit"
     disabled={isLoading}
     sx={{
      marginTop: 3,
    }}
    >LOGIN</Button>
    </form>
    </div>
  );
}