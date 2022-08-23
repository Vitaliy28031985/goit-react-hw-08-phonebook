import PropTypes from 'prop-types';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {filterContact} from '../../redux/actions';
import {getFilter} from '../../redux/selectors'

export const Filter = () => {

const filterValue = useSelector(getFilter);
const dispatch = useDispatch();

const filterChange = e => dispatch(filterContact(e.target.value));

  
return (
   <>
   <TextField fullWidth 
   type='text' value={filterValue} 
   onChange={filterChange}
   id="filter" /></>

   );
};

Filter.propTypes = {
   filterValue: PropTypes.string.isRequired,
   filterChange: PropTypes.func.isRequired,
 }
