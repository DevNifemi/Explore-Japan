import {useState} from 'react'

const BannerContent = ({context, onChange}) => {    
  const [contents, setContent] = useState([
    {  text: 'It is a startup that was founded in 1978 ',
        id: 1,
        activeNavigation: false,
    },
    {   text: 'Japan Travels has the best exploring team set up',
        id: 2,
        activeNavigation: false,
    },
    {   text: 'Explore Every Beautiful Destinations In Japan.',
        id: 3,
        activeNavigation: true,
    },
    {   text: 'Move around the world without leaving Japan',
        id: 4,
        activeNavigation: false,
    },
    {   text: 'Lets move here in japan from tokyo to okawa',
        id: 5,
        activeNavigation: false,
    },
  ])

//add active class to the navigations
  const onHandle = (id) => {   
    setContent(contents.map((content) =>
    content.id === id ? {...content, activeNavigation: true} : {...content, activeNavigation: false}))
  }

    return (
        <div className="content-container d-flex">  

            <div className='navigation'>
                <ul>

                    {contents.map((content) => (
                    <li
                    key={content.id}
                    onClick={() => {onChange(content.text) 
                    onHandle(content.id)
                    }}
                    className={`unactive ${content.activeNavigation ? 'active-navigation' : ''}`}
                    >{content.activeNavigation ? `${content.id}` : ''}</li>
                    ))}

                </ul>
            </div>

            <div className='banner-content'>
                <h1 className='header-content'>{context}</h1> 
                <p className='description'>Wellness for your body and mind. Our Team has been working throughout for 20 years. We counted hundred of travels and thousand of satisfied customers. </p>
                <button className='banner-btn btn mb-4'>Know More</button>   
            </div> 

            <div className="social-media-sect">
                <ul>
                    <li><i class='bx bxl-twitter'></i></li>
                    <li><i class='bx bxl-instagram' ></i></li>
                    <li><i class='bx bxl-facebook-circle'></i></li>
                </ul>
            </div>

        </div>
    )
}

export default BannerContent


