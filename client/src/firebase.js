// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth"
const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId:,
  storageBucket: ,
  messagingSenderId: ,
  appId: 
};
const app= firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth()

export default  app