import React from 'react';

export const SearchBox = ({placeholder,handleChange}) => {
    return(
    <input 
    className='mt-2 btn btn-dark text-white rounded-pill'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
    />)
}