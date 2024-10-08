import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li> Home </li>
                <li> Escócia </li>
                <li> Grand Canyon </li>
                <li> Aruba </li>
                <li> Muralhas da China </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;