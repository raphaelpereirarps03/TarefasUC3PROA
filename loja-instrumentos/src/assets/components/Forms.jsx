import styles from './Forms.module.css'

import Label from './FormsComponents/Label';
import Input from './FormsComponents/Input';
import SubmitButton from './FormsComponents/SubmitButton';

function Forms() {
    return (
        <forms className={styles.forms}>
            <Label textLabel="Entre com seu nome:" />
            <Input name="nome"  id="nome" placeholder="Digite seu nome aqui"/>
            <Label textLabel="Entre com seu email:" />
            <Input name="email"  id="email" placeholder="Digite seu email aqui"/>
            <SubmitButton />
        
        </forms>

    )
}

export default Forms;