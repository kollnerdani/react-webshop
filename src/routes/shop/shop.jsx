import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories";
import CategoryPreview from "../../components/category_preview/category_preview";
import './shop.scss'

const Shop = () =>{
    const { categoriesMap }  = useContext(CategoriesContext)

    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map(title =>{
                const products = categoriesMap[title]
                return <CategoryPreview key={title} products={products} title={title}/>
                })}
        </div>
    )
}

export default Shop;