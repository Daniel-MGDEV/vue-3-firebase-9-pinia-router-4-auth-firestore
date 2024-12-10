// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAhFCAk6tIgTAB7K24Y-aO8MqfoJCpyPpY",
  authDomain: "vue-3-2022-91f98.firebaseapp.com",
  projectId: "vue-3-2022-91f98",
  storageBucket: "vue-3-2022-91f98.firebasestorage.app",
  messagingSenderId: "335238761523",
  appId: "1:335238761523:web:3a9d0180cea131bc2e6746"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {auth, db};