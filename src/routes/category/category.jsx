import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import ProductCard from '../../components/product_card/product_card';
import Spinner from "../../components/spinner/spinner";

import './category.scss';

const Category = () => {
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap)
    const isLoading  = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            { isLoading ? (
                <Spinner/>
            ) : (
                <div className='category-container'>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
            )
            }
        </Fragment>
    );
};

export default Category;