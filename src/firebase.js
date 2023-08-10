
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

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
export const auth = getAuth();


// const analytics = getAnalytics(app);