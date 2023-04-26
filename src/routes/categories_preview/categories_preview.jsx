import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category_preview/category_preview";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner";


const CategoriesPreview = () =>{
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    return (
        <Fragment >
            {isLoading ? (<Spinner/>) : (Object.keys(categoriesMap).map(title =>{
                const products = categoriesMap[title]
                return <CategoryPreview key={title} products={products} title={title}/>
            }))

            }
        </Fragment>
    )
}

export default  CategoriesPreview;