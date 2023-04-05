import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import CheckoutItem from "../../components/checkout_item/checkout_item";
import './checkout.scss'
const Checkout = () =>{
    const { cartItems, totalValue } = useContext(CartContext)
    return(
        <div>
            {
                cartItems.map((cartItem) => (<CheckoutItem key={cartItem.id}  cartItem={ cartItem } />))
            }
            <div>
                Total: ${totalValue}
            </div>
        </div>
    )
}

export default Checkout;