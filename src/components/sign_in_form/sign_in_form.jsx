import { useState } from "react";
import FormInput from "../form_input/form_input";

import {
    signInWithGooglePopUp,
    createUserDocument,
    SignInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";
import Button from "../button/button";
import './sign_in_form.scss'
const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const handleChange = (event) =>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const response =  await SignInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            setFormFields(defaultFormFields)
        } catch (error){
            switch (error.code){
                case 'auth/wrong-password':
                    alert('Invalid Password')
                    break;
                case 'auth/user-not-found':
                    alert('Invalid User')
                    break;
                default:
                    console.log(error.code)
            }
        }
    }
    const googleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        await createUserDocument(user);
    }
    return (
        <div className="sign-in-container">
            <h2>If you have already an account!</h2>
            <span>Sign In</span>
            <form onSubmit={handleSubmit}>
                {Object.entries(formFields).map(([key, value]) => {
                    let type ="text"
                    if (key.includes("password")){
                        type = "password"
                    }
                    return (
                        <div key={key}>
                            <FormInput  label={key.toLowerCase()} inputOptions={{type:type, onChange:handleChange, value:value, name:key, required: true}} />
                        </div>
                    )
                })}
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={googleUser}>
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;