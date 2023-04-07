import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";
import CartIcon from "../../components/cart_icon/cart_icon";
import CartDropdown from "../../components/cart_dropdown/cart_dropdown";
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utils/firebase/firebase";
import {LogoContainer, NavigationContainer, NavLinksContainer, NavLink} from './navigation.style';
const Navigation = () =>{
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to='/'>
                    <CrownLogo className='logo'/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser ? (<NavLink onClick={signOutUser} >Sign Out</NavLink>) : (<NavLink to='/auth'>
                        Sign IN
                    </NavLink>)}
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;