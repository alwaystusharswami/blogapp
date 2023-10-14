import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB41jPxufMVOTHbUwJIeunue2o4OQvMV0",
  authDomain: "blogapp-7bad8.firebaseapp.com",
  projectId: "blogapp-7bad8",
  storageBucket: "blogapp-7bad8.appspot.com",
  messagingSenderId: "18554907391",
  appId: "1:18554907391:web:636455117c463dee75faca",
  measurementId: "G-42FKTXC6B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);