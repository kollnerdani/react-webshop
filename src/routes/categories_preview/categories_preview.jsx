import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories";
import CategoryPreview from "../../components/category_preview/category_preview";

const CategoriesPreview = () =>{
    const { categoriesMap }  = useContext(CategoriesContext)

    return (
        <Fragment >
            {Object.keys(categoriesMap).map(title =>{
                const products = categoriesMap[title]
                return <CategoryPreview key={title} products={products} title={title}/>
            })}
        </Fragment>
    )
}

export default  CategoriesPreview;