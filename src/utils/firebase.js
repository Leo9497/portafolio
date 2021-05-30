import firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyAR2o_BrNXX_jiBFPC8mFGi9qXrQQ_1blw",
    authDomain: "prueba-65cb7.firebaseapp.com",
    projectId: "prueba-65cb7",
    storageBucket: "prueba-65cb7.appspot.com",
    messagingSenderId: "343153940946",
    appId: "1:343153940946:web:9a231a8531dcfd0c4e900b",
    measurementId: "G-BHE6G7K545"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const firebaseApp = firebase.initializeApp(firebaseConfig);