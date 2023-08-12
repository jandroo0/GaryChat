
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBcFpeOqLWCdSTfFfkTNBHFfqQG3Qx0zlM",
    authDomain: "garychat-cf940.firebaseapp.com",
    projectId: "garychat-cf940",
    storageBucket: "garychat-cf940.appspot.com",
    messagingSenderId: "821479232240",
    appId: "1:821479232240:web:4a1c1e6b94fae8a1e4a835",
    measurementId: "G-4XDQZQYBMJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const analytics = getAnalytics(app);

export const db = getFirestore();

// firebase storage
export const storage = getStorage(app);
