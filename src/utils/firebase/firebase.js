import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDBhGpq6JJX-rkMQIF1tjfkvqhlS2h_RIs",
  authDomain: "syncedvibes.firebaseapp.com",
  databaseURL: "https://syncedvibes.firebaseio.com",
  projectId: "syncedvibes",
  storageBucket: "syncedvibes.appspot.com",
  messagingSenderId: "13499403135"
};

firebase.initializeApp(config);

export const rrfConfig = {
  userProfile: "users",
  profileParamsToPopulate: [
    { child: "role", root: "roles" } // populates user's role with matching role object from roles
  ],
  // profileFactory: (userData, profileData) => {
  //   // how profiles are stored in database
  //   const { user } = profileData;
  //   console.log({ user });
  //   return { email: "maman" };
  //   // return {
  //   //   email: user.email,
  //   //   username: user.username
  //   // };
  // },
  attachAuthIsReady: true, // attaches auth is ready promise to store
  firebaseStateName: "firebase" // should match the reducer name ('firebase' is default)
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

export default firebase;
