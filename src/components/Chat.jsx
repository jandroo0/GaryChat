import React from 'react';

import Add from '../img/Add.png';
import Cam from '../img/Cam.png';
import More from '../img/More.png';

import Messages from './Messages';
import Input from './Input';


const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Alejandro</span>
                <div className="chatIcons">
                    <img src={Cam} alt=""></img>
                    <img src={Add} alt=""></img>
                    <img src={More} alt=""></img>
                </div>
            </div>
            <Messages />
            <Input />

        </div>
    )
}

export default Chat