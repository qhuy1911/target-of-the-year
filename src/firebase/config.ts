// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBAGoI_xrSuhLfLCnZmGRLc0jJF2exkC9U',
  authDomain: 'targets-of-the-year.firebaseapp.com',
  projectId: 'targets-of-the-year',
  storageBucket: 'targets-of-the-year.appspot.com',
  messagingSenderId: '624269696739',
  appId: '1:624269696739:web:336e911ca5c28bcef32fd6',
  measurementId: 'G-5XWQPEN1YX'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
