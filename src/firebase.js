import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4QHskUExgc6mjykoTvCzPrDilOV0Viyw",
  authDomain: "slack-clone-byshagun.firebaseapp.com",
  databaseURL: "https://slack-clone-byshagun.firebaseio.com",
  projectId: "slack-clone-byshagun",
  storageBucket: "slack-clone-byshagun.appspot.com",
  messagingSenderId: "850548628200",
  appId: "1:850548628200:web:8daea221ccf45e5795875d",
  measurementId: "G-T7G83X7R4L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;