import {useState} from 'react'
import CardActivationBtn from './CardActivationBtn'

const CardContainer = ({ packages }) => {
    const [current, setCurrent] = useState(1)
    const length = packages.length
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
        <div>
            <div className='card-container'>
                { packages.map((pack, index) =>(
                                    
                // card
                <div key={pack.id} className={`card-content ${index === current ? 'active-card' : ''}`}>
                    <div className='travelImg'>
                        <img className='image' src={pack.imageUrl} alt='card'/>
                    </div>

                    {/* content on top of image */}
                    <div className="image-content">
                        <div className="price-card">
                            $5000
                        </div>

                        <div className="cart">
                            <i className='bx bx-cart-alt'></i>
                        </div>
                    </div>

                    {/* card informations */}
                    <div className='card-info p-3'>
                        <h5>{pack.cardHeader}</h5>
                        <p>{pack.cardContent}</p>

                        <div className='d-flex reviews'>
                            <div className='ratings'>
                                <i class='bx bxs-star bx-flip-horizontal' style={{color: '#EE2024'}}></i>
                                <i class='bx bxs-star bx-flip-horizontal' style={{color: '#EE2024'}} ></i>
                                <i class='bx bxs-star bx-flip-horizontal' style={{color: '#EE2024'}} ></i>
                                <i class='bx bxs-star bx-flip-horizontal' style={{color: '#EE2024'}} ></i>
                                <i class='bx bxs-star bx-flip-horizontal' style={{color: '#EE2024'}} ></i>

                                <span>69 Reviews</span>
                            </div>

                            <div className='card-label'>
                                <h5>2D</h5>
                                <h5>2N</h5>
                            </div>
                        </div>
                        
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

export default CardContainer