import { Link } from  'react-router-dom';

import Container from './Container';
import LinkListNav  from './LinkListNav';
import MenuHamburguer from './MenuHamburguer';


import styles from './Navbar.module.css'
import logo from '../../imgs/costs_logo.png'
function Navbar () {
    return (
        
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <LinkListNav style={styles.list}/>
                {/* <MenuHamburguer /> */}
            </Container>
        </nav>
    )
}

export default Navbar;