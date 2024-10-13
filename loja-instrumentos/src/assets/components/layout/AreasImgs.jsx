import styles from './AreasImgs.module.css'

function Areas({imagem, descimg}) {
    return (
        <div className={styles.areaImgs}>
            <img src={imagem} alt={descimg} />
        </div>
    )
}

export default Areas