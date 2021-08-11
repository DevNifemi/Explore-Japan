import BannerContent from "./BannerContent"
import NavBar from "./NavBar"

const Banner = ({content, onChange}) => {
    return (
        <div className='banner-background'>

            {/* banner content */}
            <div className='banner'>
                <NavBar/>
                <BannerContent context={content} onChange={onChange}/>

                <div className='overlay'></div>
                <a className='scrollbar' href='#book-flight'><i class='bx bx-toggle-left bx-rotate-90' ></i> Scroll Down</a>
            </div>

        </div>
    )
}

export default Banner
