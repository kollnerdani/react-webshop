import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";
import CartIcon from "../../components/cart_icon/cart_icon";
import CartDropdown from "../../components/cart_dropdown/cart_dropdown";
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utils/firebase/firebase";
import './navigation.scss';
const Navigation = () =>{
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
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
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;