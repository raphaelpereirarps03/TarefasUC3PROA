import Section from "../layout/Section";
import AreasText from "../layout/AreasText";
import AreasImgs from "../layout/AreasImgs";


import iframe from '../../imgs/iframegoogle.jpg'

function Sobre () {
    return (
        <Section customClass="amarelo">


        <AreasImgs
            imagem={iframe}
            descimg="Loja de instrumentos"
        />

        <AreasText
            titulo="Nossa Loja - Instrumentos Musicais"
            descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas inventore quaerat ullam fugiat architecto laboriosam nulla, cupiditate ex, ipsa iusto beatae voluptatibus harum reiciendis at tenetur sunt quisquam et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ullam odit veritatis. Molestias, ut. Non dolorum odio fuga eius doloremque illum, laboriosam eligendi animi similique. Quisquam illum voluptas et aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque quod. Deleniti dignissimos exercitationem qui neque beatae consectetur corrupti expedita quasi facere a, nostrum reprehenderit ullam, consequatur illo esse commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas inventore quaerat ullam fugiat architecto laboriosam nulla, cupiditate ex, ipsa iusto beatae voluptatibus harum reiciendis at tenetur sunt quisquam et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ullam odit veritatis. Molestias, ut. Non dolorum odio fuga eius doloremque illum, laboriosam eligendi animi similique. Quisquam illum voluptas et aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque quod. Deleniti dignissimos exercitationem qui neque beatae consectetur corrupti expedita quasi facere a, nostrum reprehenderit ullam, consequatur illo esse commodi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas inventore quaerat ullam fugiat architecto laboriosam nulla, cupiditate ex, ipsa iusto beatae voluptatibus harum reiciendis at tenetur sunt quisquam et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ullam odit veritatis. Molestias, ut. Non dolorum odio fuga eius doloremque illum, laboriosam eligendi animi similique. Quisquam illum voluptas et aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque quod. Deleniti dignissimos exercitationem qui neque beatae consectetur corrupti expedita quasi facere a, nostrum reprehenderit ullam, consequatur illo esse commodi?"
        />
    </Section>
    )
}

export default Sobre;