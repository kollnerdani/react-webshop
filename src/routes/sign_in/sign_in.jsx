import SignUpForm  from "../../components/sign_up_form/sign_up_form";
import Button from "../../components/button/button";
import { signInWithGooglePopUp ,createUserDocument, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';


const SignIn = () => {
    const googleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocument(user);
    }
    return (
        <div>
            <h1>SIGN IN</h1>
            <Button buttonType='google' onClick={googleUser}>
                Sign in with Google
            </Button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;