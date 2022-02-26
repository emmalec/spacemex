// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import manual para agregar la funcion que obtiene la instancia de firestore
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD5PVMHFwqDSaJDavu3tqTbrum1DnUUn4",
  authDomain: "spacemex-964ad.firebaseapp.com",
  projectId: "spacemex-964ad",
  storageBucket: "spacemex-964ad.appspot.com",
  messagingSenderId: "629096975240",
  appId: "1:629096975240:web:0510781ab7e4f6a9c8483d",
  measurementId: "G-1WJVBTX3ZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Export de la base de datos de firestore para usarla en la app

export const db = getFirestore(app); //aca exportamos firestore de la const app
