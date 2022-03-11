// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4u6kMWdPZ5jP0tZqkvYv2b0cGim5mnZM",
  authDomain: "test-project-580a5.firebaseapp.com",
  projectId: "test-project-580a5",
  storageBucket: "test-project-580a5.appspot.com",
  messagingSenderId: "539032504190",
  appId: "1:539032504190:web:58acc6bad67d5fb2c3152f",
  measurementId: "G-QJ2K062PJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);