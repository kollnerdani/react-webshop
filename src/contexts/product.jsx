import { createContext, useState, useEffect } from "react";
import PRODUCTS from '../shop_data.json';
export const ProductsContext = createContext({
    products: [],
    setProducts: []
});

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS)
    return (
        <ProductsContext.Provider value={products}>{children} </ProductsContext.Provider>
    )
}