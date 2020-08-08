import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmn4HA_dEynjp3HHPB6Xfq3FQVRQUUCII",
    authDomain: "clone-e5be8.firebaseapp.com",
    databaseURL: "https://clone-e5be8.firebaseio.com",
    projectId: "clone-e5be8",
    storageBucket: "clone-e5be8.appspot.com",
    messagingSenderId: "832244640017",
    appId: "1:832244640017:web:eee3289a60c51fea3b84b0",
    measurementId: "G-JCHJPBX1GM"
});

const auth = firebase.auth();

export { auth };