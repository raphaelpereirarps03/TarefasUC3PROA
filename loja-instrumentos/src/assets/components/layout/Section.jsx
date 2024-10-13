import styles from './Section.module.css'

function Section(props) {
    return (
        <section className={`${styles.sectionBase} ${styles[props.customClass ]}`}>
            {props.children}
        </section>
    )
}

export default Section;