import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { doc, setDoc , getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdJXwDLwneSJQuDLpRT9l2OiAm7TJC61E",
    authDomain: "smit-projects-59cf9.firebaseapp.com",
    projectId: "smit-projects-59cf9",
    storageBucket: "smit-projects-59cf9.firebasestorage.app",
    messagingSenderId: "585656771043",
    appId: "1:585656771043:web:0eee50bf01d1b35b2500d6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    doc,
    setDoc
}