import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2fefNwqPzmQaPOboln-HUS2DG4z2wkgQ",
  authDomain: "cart-598e3.firebaseapp.com",
  projectId: "cart-598e3",
  storageBucket: "cart-598e3.appspot.com",
  messagingSenderId: "475104948407",
  appId: "1:475104948407:web:451ed94692e2ea89a5dd32"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
