import styles from './MuralhasDaChina.module.css'

import ComponentsProps from '../layout/ComponentsProps';
import BandeiraChina from '../../imgs/bandeiraChina.png'
function MuralhasDaChina() {
    return (
        <div className = {styles.fundo}>

        <ComponentsProps 
            nomePais="China" 
            desc="Pais lindo e maravilhoso, castelos medievais, lindas florestas, boa cerveja, comidas típicas, ambiete acolhedor"
            bandeira= {BandeiraChina}

        />

        </div>
    )
}

export default MuralhasDaChina;