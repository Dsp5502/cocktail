import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKCowo4HLUbs2xUyNTw5DL97WICWuUBDo',
  authDomain: 'cocktels.firebaseapp.com',
  projectId: 'cocktels',
  storageBucket: 'cocktels.appspot.com',
  messagingSenderId: '602460268170',
  appId: '1:602460268170:web:3b6cb3c06232cbcafd6f73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
