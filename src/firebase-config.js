import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAwXIOZineAWz_CBA3i3xZpNf54DBUSlns",
  authDomain: "blog-project-a3fe1.firebaseapp.com",
  projectId: "blog-project-a3fe1",
  storageBucket: "blog-project-a3fe1.appspot.com",
  messagingSenderId: "1077435930963",
  appId: "1:1077435930963:web:f6abb5bac6d0a84a81a9a6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();