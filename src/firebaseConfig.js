// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhFCAk6tIgTAB7K24Y-aO8MqfoJCpyPpY",
  authDomain: "vue-3-2022-91f98.firebaseapp.com",
  projectId: "vue-3-2022-91f98",
  storageBucket: "vue-3-2022-91f98.firebasestorage.app",
  messagingSenderId: "335238761523",
  appId: "1:335238761523:web:3a9d0180cea131bc2e6746"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};