import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDbAjp6HKd1LsuJ7r1kisZLS-M-WISLIA0",
  authDomain: "eportal-722f8.firebaseapp.com",
  databaseURL: "https://eportal-722f8-default-rtdb.firebaseio.com",
  projectId: "eportal-722f8",
  storageBucket: "eportal-722f8.appspot.com",
  messagingSenderId: "271592625211",
  appId: "1:271592625211:web:91a1842eff15934573781e",
  measurementId: "G-MDY644RS6X" 
  };

// const firebaseApp = firebase.initializeApp(fireba)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;