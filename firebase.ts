// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBveB7WqaN2QpLKTwL7zvE-SkqO902ZgeU',
  authDomain: 'notion-clone-62bfd.firebaseapp.com',
  projectId: 'notion-clone-62bfd',
  storageBucket: 'notion-clone-62bfd.firebasestorage.app',
  messagingSenderId: '880988798948',
  appId: '1:880988798948:web:a55573a2db08c643e9d1f1',
  measurementId: 'G-Y1Y0MEWNK9',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
