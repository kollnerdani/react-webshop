import { Fragment } from "react";
import {useSelector} from "react-redux";
import CategoryPreview from "../../components/category_preview/category_preview";
import {selectCategoriesMap} from "../../store/categories/category.selector";


const CategoriesPreview = () =>{
    const categoriesMap = useSelector(selectCategoriesMap)

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