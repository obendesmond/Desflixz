import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRkFtfTSW3M55E_vTeiIvATJpa37wJVB4",
  authDomain: "desflixz.firebaseapp.com",
  projectId: "desflixz",
  storageBucket: "desflixz.appspot.com",
  messagingSenderId: "434259488668",
  appId: "1:434259488668:web:9dbfe403ffe10b33566259",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
