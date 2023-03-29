import CategoryItem from "../category_item/category_item";
import React from "react";
import './directory.scss'

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                return (
                    <CategoryItem category={category} key={category.id}/>
                )
            })}
        </div>
    );

}

export default Directory;