// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxB4UpPUDHoGIPRvcFGT2FhGwocK8aWTA",
  authDomain: "senpro-1d417.firebaseapp.com",
  projectId: "senpro-1d417",
  storageBucket: "senpro-1d417.firebasestorage.app",
  messagingSenderId: "970483775831",
  appId: "1:970483775831:web:faa877dacf8567e1822612",
  measurementId: "G-DH6GNWLFCD"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, firebase };
