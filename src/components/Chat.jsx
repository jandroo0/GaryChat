import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

import Add from '../img/Add.png';
import Cam from '../img/Cam.png';
import More from '../img/More.png';

import Messages from './Messages';
import Input from './Input';


const Chat = () => {

    const { data } = useContext(ChatContext);


    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
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