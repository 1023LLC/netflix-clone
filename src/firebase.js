import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9YsLN1ig1XYqKQOnnaMreglaSxMAPgJw",
  authDomain: "netflix-clone-aedff.firebaseapp.com",
  projectId: "netflix-clone-aedff",
  storageBucket: "netflix-clone-aedff.firebasestorage.app",
  messagingSenderId: "173757448604",
  appId: "1:173757448604:web:b200ed9e125aee8a470859"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const user = res.user;

        await addDoc(collection(db, "user"), {
          uid: user.uid,
          name,
          authprovider: "local",
          email,
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}