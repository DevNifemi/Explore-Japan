import CardActivationBtn from '../card-components/CardActivationBtn'
import {useState} from 'react'


const Comment = ({}) => {
    const [clientInfo, setClientInfo] = useState([
    {
        name: 'Abiose Oluwanifemi',
        commentText: 'Zandamu ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, repudiandae exercitationem? Facilis maxime id dolore? Adipisci qui provident, eveniet sunt suscipit porro laudantium incidunt sit, reiciendis illum amet temporibus excepturi!',
        clientImage: 'https://res.cloudinary.com/nifemi/image/upload/v1627976937/ryoji-iwata_kptnjy.png',
        clientState: 'LAGOS, NIGERIA',
    },
    {
        name: 'Abubakar Qorrebullah',
        commentText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, repudiandae exercitationem? Facilis maxime id dolore? Adipisci qui provident, eveniet sunt suscipit porro laudantium incidunt sit, reiciendis illum amet temporibus excepturi!',
        clientImage: 'https://res.cloudinary.com/nifemi/image/upload/v1626416288/hitsujimaya_gvmerk.png',
        clientState: 'KWARA, NIGERIA',
    },
    {
        name: 'Abiodun Ibraheem',
        commentText: 'Abremu ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, repudiandae exercitationem? Facilis maxime id dolore? Adipisci qui provident, eveniet sunt suscipit porro laudantium incidunt sit, reiciendis illum amet temporibus excepturi!',
        clientImage: 'https://res.cloudinary.com/nifemi/image/upload/v1626424548/mount-faji_u2mmg3.png',
        clientState: 'ACCRA, GHANA',
    },
    ])
    const [current, setCurrent] = useState(0)   
    const [activeStyling, setActiveStyling] = useState('next-style')
    const length = clientInfo.length

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
            <header>
                <h1>What Client Says</h1>
            </header>
        <div className='comment-width'>

            {clientInfo.map((profile, index) => (

            <div key={index} className={`comment-container ${index === current ? 'active' : ''}`}>
                {index === current && (
                <div className='comment-box'>
                <img className='client-image' src={profile.clientImage} alt='client'/>
                <p className='comment'>{profile.commentText}</p>
                <h1 className='client-name'>{profile.name}</h1>
                <h6>{profile.clientState}</h6>
                </div>
                )}
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

export default Comment
