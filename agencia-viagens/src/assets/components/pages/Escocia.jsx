import styles from './Escocia.module.css'
import ComponentsProps from '../layout/ComponentsProps';
import BandeiraEscocia from '../../imgs/bandeiraEscocia.png'

function Escocia() {
    return (
        <div className = {styles.fundo}>
            <ComponentsProps 
            nomePais="Escocia" 
            desc="Pais lindo e maravilhoso, castelos medievais, lindas florestas, boa cerveja, comidas típicas, ambiete acolhedor"
            bandeira= {BandeiraEscocia}
            
            />

        </div>
    )
}

export default Escocia;