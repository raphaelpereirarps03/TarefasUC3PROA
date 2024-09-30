import { Link } from 'react-router-dom'
import Styles from './Navbar.module.css'

function Navbar() {
    return (
        <ul className={Styles.list}>
          <li className={Styles.item}><Link to="/">Home</Link></li>
          <li className={Styles.item}><Link to="/empresa">Empresa</Link></li>
          <li className={Styles.item}><Link to="/contato">Contato</Link></li>
        </ul>
    );
}

export default  Navbar;