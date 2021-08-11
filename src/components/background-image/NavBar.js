const NavBar = () => {
    return (
        <div className='d-flex navbar'>
            <div className='logo'>
                <img src='https://res.cloudinary.com/nifemi/image/upload/v1627296853/Japan_Logo_inf8xi.png' alt='Logo'/>
            </div>

            <nav>
                <ul className='d-flex'>
                    <li className='list'>Home</li>
                    <li className='list'>Features</li>
                    <li className='list'>Destinations</li>
                    <li className='list'>Tours</li>
                    <li className='list'>Contact</li>
                </ul>
            </nav>

            <div>
            <i className='nav-icon bx bx-search'></i>
            <i className='nav-icon bx bx-user ml-2'></i>
            </div>
        </div>
    )
}

export default NavBar
