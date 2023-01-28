import React from 'react'
import { TextField } from '@mui/material';

const SearchField = () => {
    return (
        <div className='search ml-5 mt-5'>
            <TextField
                id="standard-search"
                label="Search item"
                type="search"
                variant="standard"
            />
        </div>
    );
}

export default SearchField;