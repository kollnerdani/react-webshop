import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth'
import { auth, signInWithGooglePopUp, signInWithGoogleRedirect ,createUserDocument } from '../../utils/firebase/firebase';


const SignIn = () => {
    useEffect( async () =>{
        const response = await getRedirectResult(auth);
        console.log(response)
    }, [])
    const googleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocument(user);
    }

    return (
        <div>
            <h1>SIGN IN</h1>
            <button onClick={googleUser}>
                Sign in with Google
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with GoogleRedirect
            </button>
        </div>
    )
}

export default SignIn;