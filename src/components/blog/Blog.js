import CardActivationBtn from "../card-components/CardActivationBtn"
import { useState } from 'react'


const Blog = ({blogs}) => {
    const [current, setCurrent] = useState(1)
    const length = blogs.length
    const [activeStyling, setActiveStyling] = useState('next-style')

    // activate next card
    const nextCard = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setActiveStyling('next-style')
    }

    // activate previous card 
    const previousCard = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setActiveStyling('prev-style')
    }
    
    return (
        <div className='blog-container'>
            <div className='card-container'>
            { blogs.map((blog, index) =>(
            <div key={blog.id} className={`blog-content ${index === current ? 'active-blog-card' : ''}`}>
                <div className='travelImg'>
                    <img className='blog-image' src={blog.blogImage} alt='blog'/>
                </div>

                <div className='p-3'>
                    <div className='space-between'>
                        <h6 className='blog-writer'>{blog.dateOfUpload}</h6>
                        <p className='blog-writer'>{blog.blogWriter}</p>
                    </div>
                    <p className='blog-mini-info'>{blog.blogText}</p>
                </div> 
            </div>
            ))}
        </div>
            
        <CardActivationBtn
        onNextClick={nextCard}
        onPreviousClick={previousCard} 
        styleState={activeStyling}
        />
        </div>
    )
}

export default Blog
