import React from 'react';
import { Button, Box, Link } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Delete = () => {
    return (
        <div className='delete-button ml-5 '>
            <Box>
                <Link underline='none'>
                    <Button variant='contained'
                        sx={{
                            "&:hover": {
                                bgcolor: '#76f76a',
                                color: '#414f3f'
                            },
                            typography: {
                                "fontWeight": 900,
                                suppressDeprecationWarnings: true
                            },
                            bgcolor: '#175c15c7',
                            color: 'white'
                        }}
                        startIcon={<DeleteIcon />}
                        size='small'>
                        Delete
                    </Button>
                </Link>
            </Box>
        </div>
    );
}

export default Delete;