import React from "react";
import AddImg from "../img/addAvatar.png"

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">gary chat</span>
                <span className="title">register</span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={AddImg} alt="Add profile picture" />
                        <span>Add a profile picture</span>
                    </label>
                    <button>sign up</button>
                    <p>already a member</p>
                </form>
            </div>
        </div>
    );
};

export default Register;