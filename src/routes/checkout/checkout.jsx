import {useContext} from "react";
import { CartContext } from "../../contexts/cart";
import CheckoutItem from "../../components/checkout_item/checkout_item";
const Checkout = () =>{
    const { cartItems } = useContext(CartContext)
    console.log(cartItems)
    return(
        <div>
            {cartItems.map((cartItem) => (<CheckoutItem key={cartItem.id} item={cartItem} />))
            }
        </div>
    )
}

export default Checkout;