import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext} from "../../contexts/cart";
import './cart_dropdown.scss';
import Button from '../button/button'
import CartItem from "../cart_item/cart_item";

const CartDropdown = () =>{
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map((item) =>(
                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <Link to='/checkout'>
                <Button>
                    Checkout
                </Button>
            </Link>
        </div>
    )
}

export default CartDropdown;