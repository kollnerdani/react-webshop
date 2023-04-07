import DirectoryItem from "../directory_item/directory_item";
import './directory.scss'

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                return (
                    <DirectoryItem category={category} key={category.id}/>
                )
            })}
        </div>
    );

}

export default Directory;