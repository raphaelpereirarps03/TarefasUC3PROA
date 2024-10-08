import styles from './Aruba.module.css'
import ComponentsProps from '../layout/ComponentsProps';
import BandeirAruba from '../../imgs/bandeiraAruba.png'

function Aruba() {
    return (
        <div className = {styles.fundo}>

        <ComponentsProps 
            nomePais="Aruba" 
            desc="Pais lindo e maravilhoso, castelos medievais, lindas florestas, boa cerveja, comidas típicas, ambiete acolhedor"
            bandeira= {BandeirAruba}

        />

        </div>
    )
}

export default Aruba;