import {useNavigate} from "react-router-dom";
import { BackGroundImage, Body, DirectoryItemContainer } from './directory_item.style'

const DirectoryItem = ({ category }) =>{
    const { imageUrl, title } = category
    const navigate = useNavigate()
    const onNavigateHandler = () => {
        navigate(`shop/${title}`)
    }
    return(
        <DirectoryItemContainer>
            <BackGroundImage  imageUrl={imageUrl}/>
            <Body onClick={onNavigateHandler}>
                <h2>{title}</h2>
                <p >Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;