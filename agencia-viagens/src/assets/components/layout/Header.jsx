import styles from './Header.module.css'

import Logo from '../../imgs/viagens.jpg'
import Lupa  from '../../imgs/lupa.png'


import Navbar from './cabecalho/Navbar'
import Input from './cabecalho/Input'
function Header() {
    return (
        <header className={styles.content}>
            <img src={Logo} alt ="Logo" className={styles.logo}/>
            <Navbar />
            <Input />
            <img src={Lupa} alt="Lupa" className={styles.lupa}/>
        </header>

    )
}

export default Header;