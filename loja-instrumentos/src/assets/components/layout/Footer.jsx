import styles from './Footer.module.css'

import SocialList from '../SocialList';

function Footer() {
    return (
        <div className={styles.footer}>
            <h4> Nossa Loja Instrumentos Musicais </h4>
            <p> Rua Tito, 54 - Lapa </p>
            <p> São Paulo - Brasil </p>
            <SocialList />
        </div>
    )
}

export default Footer;