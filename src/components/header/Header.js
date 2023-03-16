import React from 'react'
import MyComponent from '../time/DateNow.js';


const Header = () => {
    return (
        <div className="header flex justify-between px-5 py-2 mb-3 bg-[#9eada2]">
            <MyComponent />
            <nav>
                <ul className="flex font-semibold">
                    <li className='px-5'><a href="users">Users</a></li>
                    <li><a href="settings">Settings</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;