import React from "react";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">gary chat</span>
                <span className="title">login</span>
                <form>
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="password" />

                    <button>sign in</button>
                    <p>not a member</p>
                </form>
            </div>
        </div>
    );
};

export default Login;