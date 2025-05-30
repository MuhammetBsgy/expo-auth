// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXajJrVjjKlrT2gVz8xmdNcBm1224Eao4',
  authDomain: 'odev-auth.firebaseapp.com',
  projectId: 'odev-auth',
  storageBucket: 'odev-auth.firebasestorage.app',
  messagingSenderId: '973273399042',
  appId: '1:973273399042:web:4840e45f62c49a51520c1b',
  measurementId: 'G-QPP4FT7DZ8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
