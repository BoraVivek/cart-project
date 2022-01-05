import { initializeApp } from 'firebase/app'; //Importing Initialize App 
import { getFirestore } from "firebase/firestore"; //Importing GetFireStore 


//Firebase Configuration 
const firebaseConfig = {
    apiKey: "AIzaSyB2fefNwqPzmQaPOboln-HUS2DG4z2wkgQ",
    authDomain: "cart-598e3.firebaseapp.com",
    projectId: "cart-598e3",
    storageBucket: "cart-598e3.appspot.com",
    messagingSenderId: "475104948407",
    appId: "1:475104948407:web:451ed94692e2ea89a5dd32"
};

//Initializing Firebase using Firebase Configuration
const app = initializeApp(firebaseConfig);

//Creating DB instance of Firestore by passing app to the getFireStore function and exporting it.
export const db = getFirestore(app);

