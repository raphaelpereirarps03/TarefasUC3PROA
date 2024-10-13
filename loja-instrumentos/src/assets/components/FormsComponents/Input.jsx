import styles from './Input.module.css'



function Input({name, id, placeholder }) {
    return (
        <div>
            <input
                className={styles.input}
                type="text"
                name={name}
                id={id}
                placeholder={placeholder}
                size="50"
            />
        </div>
    )
}

export default Input;