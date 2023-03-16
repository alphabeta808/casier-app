import * as React from 'react'
import { Button, Box, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Edit = () => {
    return (
        <div className='edit-button ml-5'>
            <Box>
                <Link href='/items/edit' underline='none'>
                    <Button variant="outlined" startIcon={<EditIcon />} size='small'>
                        Edit
                    </Button>
                </Link>
            </Box>
        </div>
    );
}

export default Edit;