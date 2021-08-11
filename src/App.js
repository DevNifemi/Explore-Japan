import CardContainer from './components/card-components/CardContainer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SvgFlex from './components/SvgFlex';
import GalleryContainer from './components/destinations/GalleryContainer';
import Banner from './components/background-image/Banner'
import { useState } from 'react'
import Blog from './components/blog/Blog';
import Comment from './components/comments/Comment';
import Contact from './components/contact/Contact';
import AcheivementContainer from './components/acheivements/AcheivementContainer'
import Footer from './components/Footer';


const App = () =>{
  const [packageDeal, setPackageDeal] = useState([
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/nifemi/image/upload/v1626425871/pexels_rofe5u.png',
      cardHeader: 'Tour to Mount Fuji',
      cardContent: 'Shopping, Mountain, Snow & Ice',
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/nifemi/image/upload/v1626416288/hitsujimaya_gvmerk.png',
      cardHeader: 'Tour to Miyako-jima',
      cardContent: 'Shopping, Mountain, Snow & Ice',
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/nifemi/image/upload/v1626424548/mount-faji_u2mmg3.png',
      cardHeader: 'Tour to Hitsujiyama Park',
      cardContent: 'Shopping, Mountain, Snow & Ice',
    },
  ])

  const [homePageInfo, setHomePageInfo] = useState('Explore Every Beautiful Destinations In Japan.')

  const [blogInfo, setBlogInfo] = useState([
    {
      id: 1,
      blogImage: 'https://res.cloudinary.com/nifemi/image/upload/v1627976969/colton-jones_zx8qos.png',
      dateOfUpload: '14 Spetember 2021',
      blogWriter: 'Uzumaki Naruto',
      blogText: 'What Happens When You Turn Your Hubby Into a Job?',
    },
    {
      id: 2,
      blogImage: 'https://res.cloudinary.com/nifemi/image/upload/v1627976937/ryoji-iwata_kptnjy.png',
      dateOfUpload: '15 July 2021',
      blogWriter: 'Kamado Tanjiro',
      blogText: 'Retirement Travel: How To Get The Most Of Our Sernior Travel',
    },
    {
      id: 3,
      blogImage: 'https://res.cloudinary.com/nifemi/image/upload/v1627976942/gio-almonte_rzdlyf.png',
      dateOfUpload: '22 October 2021',
      blogWriter: 'Sasha Blouse',
      blogText: 'A Traveler’s Manifesto: 30 Travel Japan Rules To Live by Most Out',
    },
  ])





  return (
    <div className="body">
      
      <Banner 
      content={homePageInfo}
      onChange={ (content) => {
        setHomePageInfo(content)
      }}
      />

      <div className='container'>

      <SearchBar/>

      {/* reason for choose section */}
      <Header paragraph='Wellness for your body and mind. Our Team has
      been working throughout for 20 years.' title='Reason For Choose'/>
      <SvgFlex/>

      {/* best value trips section */}
      <Header title='Best Value Trips' paragraph='Hot offers for the most amazing
      tours around Japan
      '/>
      <CardContainer 
      packages={packageDeal}
      />

      {/* popular destinations section */}
      <Header title='Popular Destinations' paragraph='World best tourist destination tours around japan'/>
      <GalleryContainer/>

      {/* acheivements */}
      <AcheivementContainer/>

      {/* comment section */}
      <Comment/>

      {/* contact section  */}
      <Contact />

      {/* blog section */}
      <Header title='Our Latest Blog' paragraph='Wellness for your body and mind. Our team has been
      working throughout for 20 years'/>
      <Blog blogs={blogInfo}/>

      </div>

      <Footer/>

    </div>
  );
}

export default App;
