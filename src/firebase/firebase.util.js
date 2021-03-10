import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCcNeFpXpkJtU8r_9mo9Uh335k1N5_1eHw",
  authDomain: "b-db-2d28a.firebaseapp.com",
  databaseURL: "https://b-db-2d28a.firebaseio.com",
  projectId: "b-db-2d28a",
  storageBucket: "b-db-2d28a.appspot.com",
  messagingSenderId: "977090835839",
  appId: "1:977090835839:web:e7802711a13cce6089164a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
