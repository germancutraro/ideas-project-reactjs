import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD1mWeh0B56eOfi6bop_Iq0misJVB-KrMw",
  authDomain: "ideas-app-reactjs.firebaseapp.com",
  databaseURL: "https://ideas-app-reactjs.firebaseio.com",
  projectId: "ideas-app-reactjs",
  storageBucket: "ideas-app-reactjs.appspot.com",
  messagingSenderId: "13035313944"
};

firebase.initializeApp(config);

const googleAuth = new firebase.auth.GoogleAuthProvider();

const db = firebase.database();

export { firebase, googleAuth, db }