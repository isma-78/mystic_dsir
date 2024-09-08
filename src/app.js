import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Votre configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcogKb63Oz49L2JFbF5UEslIspoJJxrXI",
    authDomain: "mysticdsir.firebaseapp.com",
    databaseURL: "https://mysticdsir-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mysticdsir",
    storageBucket: "mysticdsir.appspot.com",
    messagingSenderId: "405375969294",
    appId: "1:405375969294:web:d236984035a0e6bc65745f",
    measurementId: "G-HKR83D3HXT"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

// Exemple de code JavaScript pour la gestion de l'authentification utilisateur, les opérations CRUD, etc.
