import { useState, useContext } from "react";
import FormInput from "../form_input/form_input";
import { createAuthUserWithEmailAndPassword, createUserDocument } from "../../utils/firebase/firebase";
import Button from "../button/button";
import './sign_up_form.scss'
import {UserContext} from "../../contexts/user";
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    passwordConfirmation:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, passwordConfirmation} = formFields
    const { setCurrentUser } = useContext(UserContext)
    const handleChange = (event) =>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (password !== passwordConfirmation) {
            alert("passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocument(user, { displayName })
            setCurrentUser(user);
            setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('email is already in use')
            }
            else{
                console.log(error.code)
            }
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Create account!</h2>
            <span>Sign Up</span>
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
               <div >
                   <Button type='submit'>Sign Up</Button>
               </div>
            </form>
        </div>
    )
}

export default SignUpForm;