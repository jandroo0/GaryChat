import React from 'react';
import pfp from '../img/pfp.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">gary chat</span>
            <div className="user">
                <img src={pfp} alt="" />
                <span>Alejandro</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar