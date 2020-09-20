import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAeI_gLKbiQ2s_s4dAbC624MT4UCusolE",
  authDomain: "catch-of-the-day-blakelam.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-blakelam.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
