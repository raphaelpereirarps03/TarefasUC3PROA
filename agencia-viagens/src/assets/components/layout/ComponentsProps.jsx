import styles from './ComponentsProps.module.css'

function ComponentsProps({nomePais, desc, bandeira}) {
    return (
        <div className={styles.corpo_props}>
            <h2>
                Venha conhecer este lugar incrível: {nomePais}!!!
            </h2>
            <p>{desc}</p>
            <img src={bandeira} alt="" />
        </div>
    )
}

export default ComponentsProps