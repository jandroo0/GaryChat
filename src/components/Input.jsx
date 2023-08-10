import React from 'react'

import Attach from '../img/attach.png';
import SendImg from '../img/sendimg.png';


const Input = () => {
    return (
        <div className="input">
            <input type='text' placeholder="say something..." />
            <div className="send">
                <img src={Attach} alt=" " />
                <input type="file" style={{ display: 'none' }} id="file" />
                <label htmlFor='file'>
                    <img src={SendImg} alt="" />
                </label>
                <button>send</button>

            </div>


        </div>
    )
}

export default Input