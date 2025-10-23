import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUC27HvcFq4zcGN7AvMOzUgv25bd-vI8o",
  authDomain: "login-79e83.firebaseapp.com",
  projectId: "login-79e83",
  storageBucket: "login-79e83.firebasestorage.app",
  messagingSenderId: "308438045051",
  appId: "1:308438045051:web:ec061c782e3056a56d6dde",
  measurementId: "G-KCELTKPP6Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google login
const googleProvider = new GoogleAuthProvider();
document.querySelector('.google').addEventListener('click', (e) => {
  e.preventDefault();
  signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      alert("✅ Google Login Success: " + user.email);
      window.location.href="./login.html";
      console.log(user);
    })
    .catch(error => {
      alert("❌ Google Login Failed: " + error.message);
    });
});

// Facebook login
const facebookProvider = new FacebookAuthProvider();
document.querySelector('.facebook').addEventListener('click', (e) => {
  e.preventDefault();
  signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user;
      alert("✅ Facebook Login Success: " + user.email);
      console.log(user);
    })
    .catch(error => {
      alert("❌ Facebook Login Failed: " + error.message);
    });
});
