import ImageRowFour from "./ImageRowFour"
import ImageRowOne from "./ImageRowOne"
import ImageRowThree from "./ImageRowThree"
import ImageRowTwo from "./ImageRowTwo"


const GalleryContainer = () => {
    return (
        <div className='gallery-container'>
            <ImageRowOne/>
            <ImageRowTwo/>
            <ImageRowThree/>
            <ImageRowFour/>
        </div>
    )
}

export default GalleryContainer
