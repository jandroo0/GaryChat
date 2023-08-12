import React, { useContext, useState, useEffect } from 'react'
import Message from './Message'

import { ChatContext } from '../context/ChatContext';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from "../firebase";

const Messages = () => {
    const [messages, setMessages] = useState([]);

    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "messages", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data());
        })
        return () => {
            unsub();
        }
    }, [data.chatId]);


    return (
        <div className="messages">
            {messages.map((m) => (
                <Message message={m} />
            ))};
        </div>
    )
}

export default Messages