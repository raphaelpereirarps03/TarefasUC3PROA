import styles from './Footer.module.css'

import Insta from '../../imgs/insta.jpeg'
import Face from '../../imgs/facebook.jpeg'
import Whats from '../../imgs/whats.png'
import Tiktok from '../../imgs/tiktok.png'

function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li> <img src={Insta} alt="insta icon" className={styles.icons}/></li>
                <li> <img src={Face} alt="Face icon" className={styles.icons}/></li>
                <li> <img src={Whats} alt="Whats icon" className={styles.icons}/></li>
                <li> <img src={Tiktok} alt="Tiktok icon" className={styles.icons}/></li>
            </ul>
            <div>
                <p>2024 - Todos os direitos reservados © Raphael </p>
            </div>

        </footer>
        
    )
}

export default Footer;