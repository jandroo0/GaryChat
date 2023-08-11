import React, { useState } from "react";
import AddImg from "../img/addAvatar.png"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";

import { useNavigate, Link } from "react-router-dom";



const Register = () => {
    const [err, setErr] = useState(false); // submission error state
    const navigate = useNavigate();

    const handleSubmit = async (e) => { // button submit async function
        e.preventDefault(); // prevent refresh

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password); // response (created user)
            const storageRef = ref(storage, displayName); // user storage reference

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadUrl) => {
                    try {
                        await updateProfile(res.user, { // update profile
                            displayName,
                            photoURL: downloadUrl,
                        });
                        await setDoc(doc(db, "users", res.user.uid), { // set and send new user doc
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoUrl: downloadUrl,
                        });

                        await setDoc(doc(db, "userChats", res.user.uid), {}); // collection of users chats (individual chats with other people)
                        navigate("/"); //after succesfull operation (register account) go to home page

                    } catch (err) {
                        console.log(err);
                        setErr(true);
                    }
                });
            });
        } catch (err) {
            setErr(true);
        }
    };


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">gary chat</span>
                <span className="title">register</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="e-mail" />
                    <input required type="password" placeholder="password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={AddImg} alt="Add profile picture" />
                        <span>add a profile picture</span>
                    </label>
                    <button>sign up</button>
                    {err && <span>Something went wrong??</span>}
                    <p>
                        already a <Link to="/login">member</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;