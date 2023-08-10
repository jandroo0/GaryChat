import React from 'react';
import pfp from '../img/pfp.png';

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={pfp} alt=" " />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats