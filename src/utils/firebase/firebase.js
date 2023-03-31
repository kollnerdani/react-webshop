import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGUZsv_sVu2MCaRnpSphM705xyIZ8hBF0",
    authDomain: "react-webshop-e07db.firebaseapp.com",
    projectId: "react-webshop-e07db",
    storageBucket: "react-webshop-e07db.appspot.com",
    messagingSenderId: "869255812276",
    appId: "1:869255812276:web:ff4dac23020a79fccbf3e1"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const dataBase = getFirestore();
export const createUserDocument = async (userAuth) => {
    const userDocRef = doc(dataBase, 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapShot = await getDoc(userDocRef)
    if (!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(error){
            console.log(error.message)
        }
    }

    return userDocRef;
}
