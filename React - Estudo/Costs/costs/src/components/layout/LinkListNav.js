import { Link }  from 'react-router-dom';

import styles from './LinkListNav.module.css'

function LinkListNav({visible, style}) {
    return (
        <ul className={styles.list}>

            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/company">Empresa</Link></li>
            <li className={styles.item}><Link to="/contact">Contato</Link></li>
            <li className={styles.item}><Link to="/projects">Projetos</Link></li>
            <li className={styles.item}><Link to="/newProject">Novo Projeto</Link></li>
            <li className={styles.item}><Link to="/about"> Sobre </Link></li>
        </ul>
    )
}

export default LinkListNav