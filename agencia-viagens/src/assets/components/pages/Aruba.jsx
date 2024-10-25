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
            <a href="https://www.lamirrer.com.br/perfildevalor"><button> Lamier</button></a>
            <a href="https://www.lamirrer.com.br/perfildevalor"><button> Lamier</button></a>
            <a href="https://www.lamirrer.com.br/perfildevalor"><button> Lamier</button></a>

        </div>
    )
}

export default Aruba;