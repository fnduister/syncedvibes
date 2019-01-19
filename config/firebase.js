import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDBhGpq6JJX-rkMQIF1tjfkvqhlS2h_RIs",
    authDomain: "syncedvibes.firebaseapp.com",
    databaseURL: "https://syncedvibes.firebaseio.com",
    projectId: "syncedvibes",
    storageBucket: "syncedvibes.appspot.com",
    messagingSenderId: "13499403135"
  };

firebase.initializeApp(config);

export default firebase;