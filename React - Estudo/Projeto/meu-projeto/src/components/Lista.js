import Styles from './Lista.module.css'

function Lista() {
    return (
        <ul className={Styles.corpoLista}>
            <li className={Styles.itemLista}> LOL </li>
            <li className={Styles.itemLista}> Dota </li>
            <li className={Styles.itemLista}> PUBG </li>
            
        </ul>
    )
}

export default Lista;