import * as React from 'react'
import { Button, Box, Link } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Add = () => {
    return (
        <div className='add-button ml-5'>
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
                        startIcon={<AddIcon />}
                        size='small'>
                        Add
                    </Button>
                </Link>
            </Box>
        </div>
    )
}

export default Add;