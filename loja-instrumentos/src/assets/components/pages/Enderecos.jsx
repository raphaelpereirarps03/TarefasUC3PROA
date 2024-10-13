import Section from '../layout/Section';
import AreasText from '../layout/AreasText';
import Forms from '../Forms';
import SocialList from '../SocialList';


function Enderecos() {
    return (
        <div>
            <Section customClass="branco" >
                <Forms />

                <AreasText

                    titulo="Acesse também nossas redes sociais"
                    descricao={<SocialList />}
                />


            </Section>
        </div>
    )
}

export default Enderecos;