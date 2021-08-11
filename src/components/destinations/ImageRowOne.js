const ImageRowOne = () => {
    return (
        <div className='align'>
            <div className='d-image'>
                <img src='https://res.cloudinary.com/nifemi/image/upload/v1627107800/jezael-melgoza_fho90p.png' alt='tokyo'/>
                <h3 className='img-tag'> Tokyo</h3>
            </div>
            
            <div className='d-image'>
                <img alt='kyoto' src='https://res.cloudinary.com/nifemi/image/upload/v1627107950/sorasak_rj5w8g.png'/>
                <h3 className='img-tag'> Kyoto</h3>
            </div>
            
            <div className='d-image'>
                <img src='https://res.cloudinary.com/nifemi/image/upload/v1627107766/osaka_fsuw5i.png' alt='osaka'/>
                <h3 className='img-tag'> Osaka</h3>
            </div>
            
            <div className='d-image'>
                <img src='https://res.cloudinary.com/nifemi/image/upload/v1627107736/okinwa_nurg5w.png' alt='okinwa'/>
                <h3 className='img-tag'> Okinwa</h3>
            </div>
            
        </div>
    )
}

export default ImageRowOne
