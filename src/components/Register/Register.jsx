
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useSignupMutation} from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';

export default function Register() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const registerEl = {
  name,
  email,
  password, 
}
const dispatch = useDispatch();
const [singup, { isLoading }] = useSignupMutation();



const handleChange = e => {
  const {name, value,} = e.currentTarget;
  switch (name) {

    case 'name':
      setName(value);
       break;
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

const hendleSubmit = async e => {
  e.preventDefault();
  try {
    const user = await singup(registerEl).unwrap();

    dispatch(setCredentials(user));
  } catch (error) {
   alert('Sorry, something went wrong', error);
  }
console.log(
  registerEl
);
setName('');
setEmail('');
setPassword('');
};

  return (
<div
style={{
  marginTop: 150,
  marginLeft: 500,
  width: 900,
 }}>
   <form onSubmit={hendleSubmit}>
    <Box
      sx={{
        
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth
       value={name}  
       label="Name"
        id="name" 
        type="text"
        name="name"
        onChange={handleChange} />
      <TextField fullWidth
       sx={{
         marginTop: 3,
       }}
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
    >REGISTER</Button>
    </form>
    </div>
  );
}