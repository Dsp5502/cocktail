import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBaQi_CMb1GSMzMgQE0ihjk0TKoNSNTLP8',
  authDomain: 'proyectcocktails.firebaseapp.com',
  projectId: 'proyectcocktails',
  storageBucket: 'proyectcocktails.appspot.com',
  messagingSenderId: '206173664435',
  appId: '1:206173664435:web:f7c7a0ad790e67eb1c6cc6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
