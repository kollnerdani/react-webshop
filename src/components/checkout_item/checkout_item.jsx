import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, addItemToCart, deleteItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import './checkout_item.scss';

const CheckoutItem = ({ cartItem }) =>{
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem))
    const deleteItemFromCartHandler = () => dispatch(deleteItemFromCart(cartItems, cartItem))
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