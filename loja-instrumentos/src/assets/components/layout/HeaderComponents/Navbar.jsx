import styles from './Navbar.module.css'

import ListLinks from './NavbarComponents/ListLinks'

function Navbar() {
    return (
        <div className={styles.areaLinks}>
            <ListLinks />
        </div>
    )
}

export default Navbar;