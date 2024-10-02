import { useState, useEffect } from 'react';

import styles from './ProjectForm.module.css';

import Input from '../form/Input'
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';


function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        /* 
            Fazemos uma requisição à API usando fetch para a URL"https://localhost:5000/categories". 
            Após receber a resposta, transformamos os dados em JSON e atualizamos o estado categories com os dados recebidos através de setCategories;
        */
        fetch('http://localhost:5000/categories' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budge"
                placeholder="Insira o orçamento do projeto"
            />
            <Select
                name="category_id"
                text="Selecione uma categoria"
                options={categories}
            />
            <SubmitButton text={btnText} />

        </form>
    )
}

export default ProjectForm;