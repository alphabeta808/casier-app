import * as React from 'react'
import { Button } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { Box } from '@mui/material';
import { Link } from '@mui/material';


const Update = () => {
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
                        startIcon={<UpdateIcon />}
                        size='small'>
                        Update
                    </Button>
                </Link>
            </Box>
        </div>
    )
}

export default Update;