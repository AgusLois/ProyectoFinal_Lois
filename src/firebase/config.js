import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe_eUQWnNWkdliNfZGDZ_SnMRR59UzEB0",
  authDomain: "react-proyect-258dc.firebaseapp.com",
  projectId: "react-proyect-258dc",
  storageBucket: "react-proyect-258dc.appspot.com",
  messagingSenderId: "920331880474",
  appId: "1:920331880474:web:9841611f76ec9650bf29a3",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};
