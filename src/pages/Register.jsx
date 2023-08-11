import React, { useState } from "react";
import AddImg from "../img/addAvatar.png"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";



const Register = () => {
    const [err, setErr] = useState(false); // submission error state
    const navigate = useNavigate();

    const handleSubmit = async (e) => { // button submit async function
        e.preventDefault(); // prevent refresh

        const userName = e.target[0].value;
        const userEmail = e.target[1].value;
        const userPassword = e.target[2].value;
        const userImgFile = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, userEmail, userPassword); // response (created user)

            const storageRef = ref(storage, userName); // user storage reference

            await uploadBytesResumable(storageRef, userImgFile).then(() => {
                getDownloadURL(storageRef).then(async (downloadUrl) => {
                    try {
                        await updateProfile(res.user, { // update profile
                            userName,
                            profile: downloadUrl,
                        });
                        await setDoc(doc(db, "users", res.user.uid), { // set and send new user doc
                            uid: res.user.uid,
                            userName,
                            userEmail,
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
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="userImgFile" />
                    <label htmlFor="userImgFile">
                        <img src={AddImg} alt="Add profile picture" />
                        <span>add a profile picture</span>
                    </label>
                    <button>sign up</button>
                    {err && <span>Something went wrong??</span>}
                    <p>already a member</p>
                </form>
            </div>
        </div>
    );
};

export default Register;