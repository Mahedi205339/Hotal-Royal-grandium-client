// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpEikG0WlLBxy-tjlreW1zmFLWEVwJgfQ",
    authDomain: "hotel-grandium.firebaseapp.com",
    projectId: "hotel-grandium",
    storageBucket: "hotel-grandium.appspot.com",
    messagingSenderId: "724160791554",
    appId: "1:724160791554:web:db8431a6541705b895531b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app