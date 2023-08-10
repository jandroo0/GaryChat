import React from 'react';
import pfp from '../img/pfp.png';


const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='find a user' />
            </div>
            <div className="userChat">
                <img src={pfp} alt=" " />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search