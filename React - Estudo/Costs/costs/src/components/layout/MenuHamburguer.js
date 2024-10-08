import { TiThMenu } from 'react-icons/ti';
import LinkListNav from './LinkListNav';
import { useState } from 'react';
import styles from './MenuHamburguer.module.css';

function MenuHamburguer() {
    const [visible, setVisible] = useState(false); // Estado de visibilidade

    return (
        <div className={styles.menuHamburguer}>
            {/* Botão para abrir/fechar o menu */}
            <button className={styles.menuHamburguerButton} onClick={() => setVisible(!visible)}>
                <TiThMenu className={styles.menuHamburguerIcon} />
            </button>
                <LinkListNav visible={visible} style={styles.listMobile}/>

            {/* Passa o estado `visible` como prop */}
        </div>
    );
}

export default MenuHamburguer;
