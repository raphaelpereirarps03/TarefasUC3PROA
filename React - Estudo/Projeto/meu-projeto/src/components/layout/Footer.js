import { FaFacebook, FaInstagram, FaLinkedin, FaHotjar  } from 'react-icons/fa'
import Styles from './Footer.module.css'
function Footer() {
    return (
    <footer> 
        <ul className={Styles.social_list}>
            <li>
                <FaFacebook />
            </li>

            <li>
                <FaInstagram />
            </li>

            <li>
                <FaLinkedin />
            </li>

            <li>
                <FaHotjar />
            </li>
        </ul> 
        <p> Nosso rodapé </p>        
    </footer>)
}

export default Footer;