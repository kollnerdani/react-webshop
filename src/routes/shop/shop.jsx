import { useContext } from "react";
import { ProductsContext } from "../../contexts/product";
import ProductCard from "../../components/product_card/product_card";
import './shop.scss'

const Shop = () =>{
    const products  = useContext(ProductsContext)
    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard product={product} key={product.id}/>
                ))}
        </div>
    )
}

export default Shop;