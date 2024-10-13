import styles from './AreasText.module.css'

function Areas({titulo, descricao, imagem, descimg}) {
    return (
        <div className={styles.areaTexto}>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            
        </div>
    )
}

export default Areas