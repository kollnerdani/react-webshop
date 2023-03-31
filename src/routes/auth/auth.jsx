import SignUpForm  from "../../components/sign_up_form/sign_up_form";
import SignInForm from "../../components/sign_in_form/sign_in_form";
import './auth.scss';


const Auth = () => {
    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Auth;