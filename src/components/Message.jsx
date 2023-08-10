import React from 'react'

import img from '../img/pfp.png'

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={img} alt="" />
                <span>jsut now</span>
            </div>
            <div className="messageContent">
                <p>hellow</p>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Message