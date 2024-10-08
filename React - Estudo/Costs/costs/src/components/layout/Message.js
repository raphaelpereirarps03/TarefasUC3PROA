import { useState, useEffect} from  'react';

import styles from './Message.module.css'

function Message({type, msg}) {
    
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if (!msg) {
            setVisible(false)
            msg="";
            type="";
            return
        }

        setVisible(true) 

        const timer = setTimeout(()=> {
            setVisible(false)
            msg="";
            type="";
        }, 3000)

        return () => clearTimeout(timer); msg=""
        type=""

    }, [msg])

    return(
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}> {msg} </div>

            )}
        </>
    )
}

export default Message;