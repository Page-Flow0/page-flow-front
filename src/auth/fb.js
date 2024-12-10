// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjZ0qzje32dixHDFoTezfFSs_hDCvLcO4",
    authDomain: "mybook-6e8b4.firebaseapp.com",
    projectId: "mybook-6e8b4",
    storageBucket: "mybook-6e8b4.firebasestorage.app",
    messagingSenderId: "1088133067278",
    appId: "1:1088133067278:web:c4226f02c33d954844025f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const at = getAuth(app)