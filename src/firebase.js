import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {firebase} from 'firebase/app';
import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
    
  };

// const firebaseApp = firebase.initializeApp(fireba)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;