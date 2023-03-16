import React from 'react'
import Link from '@mui/material/Link';

const Navigation = () => {
    return (
        <div className='Navigation flex flex-col content-center items-center'>
            <ul className='py-5 font-semibold'>
                <li className='py-5'><Link href="/items" color='inherit' underline='none'>Inventory Page</Link></li>
                <li className='py-5'><Link href="content-penjualan" color='inherit' underline='none'>Sales Page</Link></li>
                <li className='py-5'><Link href="content-pembelian" color='inherit' underline='none'>Purchase Page</Link></li>
                <li className='py-5'><Link href="content-supplier" color='inherit' underline='none'>Supplier Data Page</Link></li>
                <li className='py-5'><Link href="content-lap-jual" color='inherit' underline='none'>Sales Report Page</Link></li>
                <li className='py-5'><Link href="content-lap-beli" color='inherit' underline='none'>Purchase Report Page</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;