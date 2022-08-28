import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useLoginMutation} from '../../redux/authApi';
import {setCredentials} from '../../redux/authSlice';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  
  const loginEl = {
    password,
    email
  };

  const handleChange = e => {
    const {name, value,} = e.currentTarget;
    switch (name) {
       case 'email':
      setEmail(value);
       break;
       case 'password':
        setPassword(value);
       break;
       default:
       return;  
    }
 };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const dataRespons = await login(loginEl).unwrap();
      dispatch(setCredentials(dataRespons));
    } catch (error) {
      alert(`User with the email: ${email} does not exist!`, error);
    }
    setEmail('');
    setPassword('');
   
  };

  return (
    <div
style={{
  marginTop: 150,
  marginLeft: 600,
  width: 900,
 }}>
   <form onSubmit={handleSubmit}>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}>
      <TextField fullWidth 
      label="Email" 
      id="email" 
      type="email"
      name="email"
      onChange={handleChange}
      value={email}
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
      value={password}
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