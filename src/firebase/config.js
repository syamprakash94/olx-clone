import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1TDBHgoJ3EQhQUynlwbse03v4SEbBAMo",
    authDomain: "fir-14026.firebaseapp.com",
    projectId: "fir-14026",
    storageBucket: "fir-14026.appspot.com",
    messagingSenderId: "560034486809",
    appId: "1:560034486809:web:1d4e2df1a9c2813be06888",
    measurementId: "G-7XP051BDF5"
};


export default firebase.initializeApp(firebaseConfig)