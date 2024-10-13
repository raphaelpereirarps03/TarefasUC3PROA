import styles from './SocialList.module.css'

import FacebookIcon from '../../assets/imgs/face.png'
import InstagramIcon from '../../assets/imgs/insta.png'
import WhatsappIcon from '../../assets/imgs/whats.png'

function SocialList() {
    return (
        <div className={styles.socialList}>
            <img src={FacebookIcon} alt="icone Facebook" />
            <img src={InstagramIcon} alt="icone Instagram" />
            <img src={WhatsappIcon} alt="icone Whatsapp" />
        </div>
    )
}

export default SocialList;