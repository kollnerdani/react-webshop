import './product_card.scss'
import Button from "../button/button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
const ProductCard = ({ product }) =>{
    const { name, imageUrl, price } = product
    const { addItemToCart } = useContext(CartContext)
    const addItem = () =>{
        addItemToCart(product)
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType='inverted' onClick={addItem}>Add to cart </Button>
        </div>
    )
}

export default ProductCard;