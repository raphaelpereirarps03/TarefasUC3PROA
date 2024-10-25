import styles from '../layout/Container.module.css'

import AreasImgs from './AreasImgs'


function Container(props) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}

export default Container;