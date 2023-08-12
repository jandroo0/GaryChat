import React, { useState, useContext } from 'react';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";


const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const { currentUser } = useContext(AuthContext); //for handling chats between logged in user and recipient

    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch {
            setErr(true);
        }

    };

    const handleKey = e => { // on input field enter
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {
        // check whether group(chats in firestore db) exists, if not create

        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid; // if the current=sender, user=recipient

        try {
            const res = await getDoc(doc(db, "chats", combinedId));
            if (!res.exists()) { // if doesnt exist create chats collection in db
                await setDoc(doc(db, "chats", combinedId), { messages: [] }); // create collection with combinedId as ID and empty messages ARRAY

                //create user chats in collection
                await updateDoc(doc(db, "userChats", currentUser.uid), { // logged in user
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoUrl: user.photoUrl,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
                await updateDoc(doc(db, "userChats", user.uid), { // recipient
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoUrl: currentUser.photoUrl,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

            }
        } catch (err) { console.log(err) }

        setUser(null);
        setUsername("");
    };


    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='find a user' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} value={username} />
            </div>

            {/* user chat search */}
            {err && <span>they dont exist</span>}
            {user && <div className="userChat" onClick={() => handleSelect}>

                <img src={user.photoUrl} alt=" " />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search