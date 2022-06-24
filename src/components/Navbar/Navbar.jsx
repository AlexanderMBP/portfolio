import './Navbar.css';
import logo from '../../assets/icons/logo.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import mail from '../../assets/icons/mail.svg'

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Ambp logo" className='navbar__logo' />
        <ul className="navbar__list">
            <li className="navbar__links">
                <a href="#Home" aria-label="Home section link" aria-hidden="true" className="navbar__link">
                    <h3 className="navbar__link-h3">Home</h3>
                </a>
            </li>
            <li className="navbar__links">
                <a href="#aboutMe" aria-label="About me section link" aria-hidden="true" className="navbar__link">
                    <h3 className="navbar__link-h3">About me</h3>
                </a>
            </li>
            <li className="navbar__links">
                <a href="#mywork" aria-label="My work section link" aria-hidden="true" className="navbar__link">
                    <h3 className="navbar__link-h3">My work</h3>
                </a>
            </li>
        </ul>
        <div className="navbar__social">
            <a href="https://github.com/AlexanderMBP" target="_blank" rel="noopener noreferrer" aria-label="Github link" aria-hidden="true" className="navbar__social-link">
                <img src={github} alt="Github logo" className='navbar__social-github-img' />
            </a>
            <a href="https://www.linkedin.com/in/alexandermbp/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin link" aria-hidden="true" className="navbar__social-link">
                <img src={linkedin} alt="Linkedin logo" className='navbar__social-linkedin-img' />
            </a>
            <a href="mailto:AlexanderMBP@iCloud.com"  aria-label="Mail to AlexanderMBP@iCloud.com" aria-hidden="true" className="navbar__social-link">
                <img src={mail} alt="Mail logo" className='navbar__social-mail-img' />
            </a>
        </div>
    </nav>
  );
}

export default Navbar;
