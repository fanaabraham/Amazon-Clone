import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu5BtiW_p2dEJtNNFhwkMKFhiiFmMpUMw",
  authDomain: "fir-ea9f8.firebaseapp.com",
  projectId: "fir-ea9f8",
  storageBucket: "fir-ea9f8.appspot.com",
  messagingSenderId: "1073539076896",
  appId: "1:1073539076896:web:4995062d1fde4a8093fd45",
  measurementId: "G-T8LGRHP7JB"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };