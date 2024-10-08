import styles from './GrandCanyon.module.css'
import ComponentsProps from '../layout/ComponentsProps';
import BandeiraUSA from '../../imgs/bandeiraUSA.png'
function GrandCanyon() {
    return (
        <div className = {styles.fundo}>


            <ComponentsProps 
                nomePais="Estados Unidos" 
                desc="Pais lindo e maravilhoso, castelos medievais, lindas florestas, boa cerveja, comidas típicas, ambiete acolhedor"
                bandeira= {BandeiraUSA}

            />


        </div>
    )
}

export default GrandCanyon;