import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import './product_card.scss'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
const ProductCard = ({ product }) =>{
    const { name, imageUrl, price } = product
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const addItem = () => dispatch(addItemToCart(cartItems, product))

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItem}>Add to cart </Button>
        </div>
    )
}

export default ProductCard;