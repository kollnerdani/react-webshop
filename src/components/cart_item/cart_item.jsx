import './cart_item.scss';
import category_item from "../category_item/category_item";

const CartItem = ({cartItem}) =>{
    const {name, quantity} = cartItem
    return (
        <div className="cart-item">
           <h1>{name}</h1>
            <p>{quantity}</p>
        </div>
    )
}

export default CartItem;