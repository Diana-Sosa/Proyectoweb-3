import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXA35qlsENZVz8rIdhtr3nP4Efd50RuwI",
  authDomain: "banco-recursos-academicos.firebaseapp.com",
  projectId: "banco-recursos-academicos",
  storageBucket: "banco-recursos-academicos.appspot.com",
  messagingSenderId: "1067474016478",
  appId: "1:1067474016478:web:claveUnicaDeFirebase"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const storage = getStorage(app);
