
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useGetContactsQuery, useAddContactMutation} from '../../redux/contactsSlice';



export const ContactForm = () => { 
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const [addContact] = useAddContactMutation();
const { data: contacts } = useGetContactsQuery();

   const handleChange = e => {
   const {name, value,} = e.currentTarget;
   switch (name) {
      case 'name':
      setName(value);
      break;
      case 'number':
      setNumber(value);
      break;
      default:
      return;  
   }
}

const handleSubmit = e => {
e.preventDefault();

 if (contacts.find(contact => contact.name === name)) {
alert(`A contact with the name: ${name} already exists.`);
   setName('');
   setNumber('');
   return;
 }

 if (contacts.find(contact => contact.number === number)) {
   alert(`Number: ${number} is already in use.`);
      setName('');
      setNumber('');
      return;
    }

addContact({ name, number });
setName('');
setNumber('');
}

  return (
    <>
    <form className={s.form}      
    onSubmit={handleSubmit}>

<TextField fullWidth 
        type="text"
        name="name" 
        label="Name" 
        onChange={handleChange}
        value={name}
        sx={{
         marginTop: 3,
       }}
        />
<TextField fullWidth 
        type="tel"
        name="number" 
        label="Number" 
        onChange={handleChange}
        value={number}
        sx={{
         marginTop: 3,
       }}
        />
      <Button variant="contained" type="submit"
      sx={{
         marginTop: 3,
       }}
     >Add contact</Button>
      </form>
      </>
     )
   }

ContactForm.propTypes = {
   onSubmit: PropTypes.func,
   };