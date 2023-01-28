import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Add from '../../components/button/Add';
import Update from '../../components/button/Update';
import Delete from '../../components/button/Delete';

const EditData = () => {
    return (
        <React.Fragment>
            <Container fixed>
                <Box sx={{ height: '90vh' }} >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '38ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="id filled-basic" label="Id" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <TextField id="itemCode filled-basic" label="Item Code" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <TextField id="itemName filled-basic" label="Item Name" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <TextField id="buyPrice filled-basic" label="Buy Price" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <TextField id="sellPrice filled-basic" label="Sell Price" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <TextField id="itemStok filled-basic" label="Item Stok" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <TextField id="sellerName filled-basic" label="Seller Name" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <TextField id="expiredDate filled-basic" label="Expired Date" variant="filled" sx={{ bgcolor: '#cfe8fc' }} />
                        <Box display='flex'>
                            <Add />
                            <Update />
                            <Delete />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default EditData;
