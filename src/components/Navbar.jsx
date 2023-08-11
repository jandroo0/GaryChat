import React from 'react';
import pfp from '../img/pfp.png';

import { signOut } from "firebase/auth";
import { auth } from "../firebase";


const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">gary chat</span>
            <div className="user">
                <img src={pfp} alt="" />
                <span>Alejandro</span>
                <button onClick={() => signOut(auth)}>logout</button>
            </div>
        </div>
    )
}

export default Navbar