import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAuxCGPK4u_ZlSGOG5Q7HUJS7ZoA_vGy-U",
    authDomain: "login-and-register-2046c.firebaseapp.com",
    projectId: "login-and-register-2046c",
    storageBucket: "login-and-register-2046c.firebasestorage.app",
    messagingSenderId: "701658265318",
    appId: "1:701658265318:web:f492baefc8a9276b54ed27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");

submit.addEventListener('click', function (event) {
    event.preventDefault();

    //input fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Creating Account...")
        window.location.href="profile.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
    

})

