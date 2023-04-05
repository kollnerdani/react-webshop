import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const CheckoutItem = ( { cartItem }) =>{
    const {id, name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart } = useContext(CartContext)
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem)
    return (
        <div key={id}>
            <span onClick={addItemHandler}>+</span>   <span onClick={removeItemHandler}>-</span><br/>
            <img src={imageUrl} alt={`${name}`}/><br/>
            <span className="name">{name}</span><br/>
            <span className="price">{quantity} x ${price}</span> = <span className="total">${quantity * price}</span>
        </div>
    )

}

export default CheckoutItem;