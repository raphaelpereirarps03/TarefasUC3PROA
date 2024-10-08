import styles from './Navbar.module.css'

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.menu}>
            <ul>
                <Link to='/' className={styles.navLinks}> <li> Home </li> </Link>
                <Link to='/escocia' className={styles.navLinks}><li>  Escócia </li></Link>
                <Link to='/grandcanyon' className={styles.navLinks}><li>  Grand Canyon </li> </Link>
                <Link to='/aruba' className={styles.navLinks}> <li>  Aruba  </li> </Link>
                <Link to='/muralhasdachina' className={styles.navLinks}> <li>  Muralhas da China  </li> </Link>
                
            </ul>
        </nav>
    )
}

export default Navbar;