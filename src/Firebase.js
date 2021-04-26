import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbbVaqswcU9YJUEnClD_8aKJuracpV4Rc",
  authDomain: "fir-7a16e.firebaseapp.com",
  projectId: "fir-7a16e",
  storageBucket: "fir-7a16e.appspot.com",
  messagingSenderId: "910926498916",
  appId: "1:910926498916:web:cd017b0725eef5fd91a371",
  measurementId: "G-GBD0HPCJYT",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
