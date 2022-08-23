import * as React from 'react';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactListEL = ({id, name, number, onDeleteContact}) => {

return (
<li className={s.list}>
<span className={s.text}>{name}: </span>
<span>{number}</span>
<Button variant="contained"
     type="button"
     onClick={() => onDeleteContact(id)}
     sx={{
      marginLeft: 3,
    }}
    >Delete</Button>
      </li>
)
}

ContactListEL.propTypes = {
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
onDeleteContact: PropTypes.func.isRequired,

}