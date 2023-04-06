import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
// import  { SHOP_DATA }  from '../shop_data.js';
export const ProductsContext = createContext({
    products: [],
    setProducts: () => {}
});

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState( [])
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])
    useEffect(() =>{
        const getDocs = async () =>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
        }
        getDocs()
    }, [])
    return (
        <ProductsContext.Provider value={products}>{children} </ProductsContext.Provider>
    )
}