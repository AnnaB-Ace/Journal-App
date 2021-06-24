import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCNL7B70_QRxrlGN_G_cBhNJG3TIRLA_hg",
    authDomain: "react-app-curso-27833.firebaseapp.com",
    projectId: "react-app-curso-27833",
    storageBucket: "react-app-curso-27833.appspot.com",
    messagingSenderId: "540271409934",
    appId: "1:540271409934:web:07240957dd97e042f3755f"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// referencia a mi base de datos: proveedor de datos
const db= firebase.firestore()

//primer auth provider para autenticacion de google
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider, 
    firebase
}