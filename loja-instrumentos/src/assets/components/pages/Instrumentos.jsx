import Card from '../Card';
import guitarrinha from '../../imgs/guitarrinha.jpg'
import Section from "../layout/Section";


function Instrumentos () {
    return (
        <Section customClass="ciano" >
                <Card
                    imagem={guitarrinha}
                    desc="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    titulo="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    preco="989,50"
                />
                <Card
                    imagem={guitarrinha}
                    desc="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    titulo="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    preco="989,50"
                />
                <Card
                    imagem={guitarrinha}
                    desc="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    titulo="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    preco="989,50"
                />
                <Card
                    imagem={guitarrinha}
                    desc="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    titulo="Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante"
                    preco="989,50"
                />

            </Section>
    )
}

export default Instrumentos;