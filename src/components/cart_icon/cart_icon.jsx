import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import  { CartIconContainer, ShoppingIcon, ItemCount } from "./cart_icon.style";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </ CartIconContainer>
    )
}

export default CartIcon;