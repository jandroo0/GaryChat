import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {

    const [err, setErr] = useState(false); // submission error state
    const navigate = useNavigate();

    const handleSubmit = async (e) => { // button submit async function
        e.preventDefault(); // prevent refresh

        const userEmail = e.target[0].value;
        const userPassword = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            navigate("/")
        } catch (err) {
            console.log(err)
            setErr(true);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">gary chat</span>
                <span className="title">login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="password" />

                    <button>sign in</button>
                    {err && <span>Something went wrong??</span>}
                    <p>not a <Link to="/register">member</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;