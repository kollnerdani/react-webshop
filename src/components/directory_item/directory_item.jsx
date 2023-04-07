import { BackGroundImage, Body, DirectoryItemContainer } from './directory_item.style'

const DirectoryItem = ({ category }) =>{
    const { imageUrl, title} = category
    return(
        <DirectoryItemContainer>
            <BackGroundImage  imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;