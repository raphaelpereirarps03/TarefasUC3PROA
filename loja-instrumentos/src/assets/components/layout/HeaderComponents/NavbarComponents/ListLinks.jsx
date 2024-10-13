import styles from './ListLinks.module.css'

import { Link } from 'react-router-dom'

function ListLinks() {
    return (
        <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/sobre"> Quem Somos </Link> </li>
            <li> <Link to="/instrumentos"> Instrumentos </Link> </li>
            <li> <Link to="/enderecos"> Endereços </Link> </li>
            <li> <Link to="/enderecos"> Contato </Link> </li>
        </ul>
    )
}

export default ListLinks;