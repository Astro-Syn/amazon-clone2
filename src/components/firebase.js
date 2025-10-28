// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqIyyZZyyysBG8AtD_5hS35UyntojqqLw",
  authDomain: "clone-93356.firebaseapp.com",
  projectId: "clone-93356",
  storageBucket: "clone-93356.firebasestorage.app",
  messagingSenderId: "565183772873",
  appId: "1:565183772873:web:6e9cf420b8ec819945b518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export default app;
export const db = getFirestore(app)