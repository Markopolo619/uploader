// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYa1DSJEp732S-EmFt-fjdmQIyTRZggPY",
  authDomain: "uploader-30191.firebaseapp.com",
  projectId: "uploader-30191",
  storageBucket: "uploader-30191.appspot.com",
  messagingSenderId: "328085320110",
  appId: "1:328085320110:web:2c1777c34e45812d1e983f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
