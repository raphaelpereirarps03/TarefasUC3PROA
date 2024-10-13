import styles from './Card.module.css'

function Card({imagem, desc, titulo, preco}) {
    return (
        <div className={styles.cards}>
            <img src={imagem} alt={desc} />
            <p> {titulo} </p>
            <span> R${preco} </span>
        </div>
    )
}

export default Card;