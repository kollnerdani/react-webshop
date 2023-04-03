import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";
import './navigation.scss';
const Navigation = () =>{
    const { currentUser } = useContext(UserContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (<span  onClick={signOutUser} className='nav-link'>Sign Out</span>) : (<Link className='nav-link' to='/auth'>
                        Sign IN
                    </Link>)}
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;