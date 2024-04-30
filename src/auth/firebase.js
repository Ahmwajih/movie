// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiHCkA15zD-E54GPsez2zTNBBbTRmQM0k",
  authDomain: "movie-ahmed.firebaseapp.com",
  projectId: "movie-ahmed",
  storageBucket: "movie-ahmed.appspot.com",
  messagingSenderId: "153769574558",
  appId: "1:153769574558:web:aab4a819f5be30209afb8f",
  measurementId: "G-RT66S4VD9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;