// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxvqNdmQTAIWmLULFsnLe6GB645kOiZCg",
    authDomain: "clone-14b2b.firebaseapp.com",
    databaseURL: "https://clone-14b2b.firebaseio.com",
    projectId: "clone-14b2b",
    storageBucket: "clone-14b2b.appspot.com",
    messagingSenderId: "360230479476",
    appId: "1:360230479476:web:e4ca8afc686139c2b95321",
    measurementId: "G-ZJPXX6WJF2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };




  //Should the firebaseConfig keys be in .env file?