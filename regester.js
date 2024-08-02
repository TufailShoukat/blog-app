
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDF9SmSDNnxyGyuCssPWJXyGgin22RAmE0",
    authDomain: "project-using-firestore.firebaseapp.com",
    projectId: "project-using-firestore",
    storageBucket: "project-using-firestore.appspot.com",
    messagingSenderId: "492343232066",
    appId: "1:492343232066:web:266dad280069ebe3e98fdb",
    measurementId: "G-DNZ8DHHNW3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get DOM elements
const signUpEmail = document.getElementById("signUp_Email");
const signUpPassword = document.getElementById("signUp_password");
const signUpBtn = document.getElementById("signUpBtn");

const signInEmail = document.getElementById("signIn_email");
const signInPassword = document.getElementById("signIn_Password");
const signInBtn = document.getElementById("signIn_Btn");



signUpBtn.addEventListener("click", () => {
    const email = signUpEmail.value;
    const password = signUpPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
            
            const user = userCredential.user;
            console.log(user);
            Swal.fire('Success', 'Account created successfully!', 'success');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            Swal.fire('Error', errorMessage, 'error');
        });
});

// Sign In Function
signInBtn.addEventListener("click", () => {
    const email = signInEmail.value;
    const password = signInPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            Swal.fire('Success', 'Logged in successfully!', 'success');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            Swal.fire('Error', errorMessage, 'error');
        });
});

// Switch between forms
const container = document.getElementById('container');
document.getElementById('signIn').addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
document.getElementById('signUp').addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

