import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAAH4LiOksaA4eAHdoRp_iqiv-ggeQ0jI4",
  authDomain: "tracker-agile.firebaseapp.com",
  databaseURL: "https://tracker-agile.firebaseio.com",
  projectId: "tracker-agile",
  storageBucket: "tracker-agile.appspot.com",
  messagingSenderId: "227066011749",
  appId: "1:227066011749:web:1969200cc4b2d911eb668c"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
