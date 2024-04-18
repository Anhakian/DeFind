import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <ul className='all-nav-button'>
                    <li className='title'><a href=''><h1><strong>DeFind</strong></h1></a></li>
                    <ul className='nav-button'>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Contribute to DeFind</a></li>
                        <li><a href=''>Resources</a></li>
                    </ul>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar