
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useSignupMutation} from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';

export default function Register() {

const [registerEl, setRegisterEl] = useState({
  name: '',
  email: '',
  password: ''
});

const dispatch = useDispatch();
const [singup, { isLoading }] = useSignupMutation();

const handleChange = ({ target: { name, value } }) => {
  setRegisterEl(prev => ({ ...prev, [name]: value }));
  };


const hendleSubmit = async e => {
  e.preventDefault();
  try {
    const user = await singup(setRegisterEl).unwrap();

    dispatch(setCredentials(user));
  } catch (error) {
    console.log('Oh no, there was an register error!', error);
  }

  setRegisterEl({
    name: '',
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
   <form onSubmit={hendleSubmit}>
    <Box
      sx={{
        
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth
       value={registerEl.name}  
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
      value={registerEl.email}
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
      value={registerEl.password}
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