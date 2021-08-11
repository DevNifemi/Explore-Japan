const Footer = () => {
    return (
        <footer>
            <div className='footer-parent container'>

                <div className='footer-contents'>
                    <div className='footer-logo'>
                        <img src='https://res.cloudinary.com/nifemi/image/upload/v1627296853/Japan_Logo_inf8xi.png' alt='Footer-Logo'/>
                        <p>We’ve got the solution: World-class training and development programs developed by the best universities and companies</p>
                    </div>

                    <div className='quick-links'>
                        <ul className='footer-text'>
                            <h6>Quick Links</h6>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Destinations</li>
                            <li>Tour List</li>
                            <li>Gallery</li>
                        </ul>
                    </div>

                    <div className='footer-features'>
                        <ul className='footer-text'>
                            <h6>Features</h6>
                            <li>Spin to Win</li>
                            <li>Partner with us</li>
                            <li>Co-operate</li>
                            <li>Earn money with Affliate</li>
                            <li>Team plan</li>
                        </ul>
                    </div>
                    
                    <div className='footer-contact'>
                        <ul className='footer-text'>
                            <h6>Conact Us</h6>
                            <li>05, Ichiraku Street, Konoha Hidden Leaf</li>
                            <li>Phone:09035 554 4754</li>
                            <li>Email: explorejapan@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-overlay'></div>
            
            <div className="line"></div>
            <div className="footer-last-sect container">
                <p>2021, All Right Reserved</p>
                <ul className='d-flex footer-icons'>
                    <li><i class='bx bxl-twitter'></i></li>
                    <li><i class='bx bxl-instagram' ></i></li>
                    <li><i class='bx bxl-facebook-circle'></i></li>
                </ul>
                <p>Terms & Condition</p>
            </div>
        </footer>
    )
}

export default Footer
