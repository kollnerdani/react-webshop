import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, {BUTTON_TYPE_CLASSES} from '../button/button'
import CartItem from "../cart_item/cart_item";
import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart_dropdown.style";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () =>{
    const cartItems  = useSelector(selectCartItems)
    const navigate = useNavigate();
    const goToCheckOutHandler = () =>{
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) =>(
                        <CartItem key={item.id} cartItem={item}/>
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckOutHandler} buttonType={BUTTON_TYPE_CLASSES.base}>
                Checkout
            </Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;