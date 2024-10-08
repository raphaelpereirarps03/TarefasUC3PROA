import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}>{/*Imagem da mala vindo como background*/}</div>
            <div className={styles.texto_lado}>
                <h1> Encontre a viagem dos seus sonhos!! </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet dolore in temporibus porro, maxime, voluptatibus deserunt suscipit quasi mollitia eum ea obcaecati enim repellat architecto dolores, iste autem cumque veritatis!
                </p>
            </div>
        </section>
    )
}

export default Home;