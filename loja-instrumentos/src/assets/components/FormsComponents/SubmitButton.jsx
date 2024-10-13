import styles from './SubmitButton.module.css'


function SubmitButton() {
    return (
        <button className={styles.submitButton} type="submit">
            Enviar
        </button>

    )
}

export default SubmitButton;