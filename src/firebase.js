import firebase from 'firebase';

const firebaseApp  = firebase.initializeApp({
    apiKey: "AIzaSyBIQ1FhjYhCht1pLiSYcFUiU7N0WBA6TGk",
    authDomain: "portfolio-5848a.firebaseapp.com",
    databaseURL: "https://portfolio-5848a.firebaseio.com",
    projectId: "portfolio-5848a",
    storageBucket: "portfolio-5848a.appspot.com",
    messagingSenderId: "156745633121",
    appId: "1:156745633121:web:c8416e347ffb7bbdf48920"
});

const db = firebaseApp.firestore(); 

export default db; 