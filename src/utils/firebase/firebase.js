import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

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
export const SignInAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}
export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const dataBase = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(dataBase, collectionKey);
    const batch = writeBatch(dataBase);
    objectsToAdd.forEach((object) =>{
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })
    await batch.commit();
    console.log('done')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(dataBase, 'categories');
    const q = query(collectionRef);
    const querySnapShot = await getDocs(q);
    return querySnapShot.docs.map((doc) => doc.data());
}
export const createUserDocument = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
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
                createdAt,
                ...additionalInformation
            });
        }
        catch(error){
            console.log(error.message)
        }
    }

    return userDocRef;
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
