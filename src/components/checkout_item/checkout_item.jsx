import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import './checkout_item.scss';
const CheckoutItem = ({ cartItem }) =>{
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext)
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const deleteItemFromCartHandler = () => deleteItemFromCart(cartItem);
    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow'>
                    <span onClick={removeItemHandler}>&#10094;</span>
                </div>
                <span className='value'>
                    {quantity}x
                </span>
                <div className='arrow'>
                    <span onClick={addItemHandler}>&#10095;</span>
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={deleteItemFromCartHandler}>
                &#10005;
            </div>
        </div>
    )

}

export default CheckoutItem;