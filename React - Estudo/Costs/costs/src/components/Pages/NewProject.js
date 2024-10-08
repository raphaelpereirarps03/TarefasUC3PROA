import styles from './NewProject.module.css';


// Não se usa mais o useHistory, agora é o useNavigate
import {useNavigate } from 'react-router-dom'
import { useState } from 'react';

import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';

function NewProject () {
    const navigate = useNavigate()

    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    function createPost(project) {
        // Limpar mensagem anterior

        // Validação dos campos nome, budget e categoria
        if (!project.name || !project.budget || !project.category) {
            setMessage('Erro: Todos os campos devem ser preenchidos.')
            setType('error')
            const timer = setTimeout(()=> {
                window.location.reload();
            }, 3000)
            return false // Previne o envio ao backend
            
        }

        // Inicializa o custo e serviços do projeto
        project.cost = 0;
        project.services = []

        // Faz a requisição para o backend
        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp => resp.json()))
        .then((data) => {
            console.log(data)
            // Redireciona após sucesso
            navigate('/projects', { state: { message: 'Projeto criado com sucesso' } })
        })
        .catch(err => console.log(err))


    }

    return (
        <div className={styles.newproject_container}>
            { message && <Message type={type} msg={message}/>}

            


            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}


export default NewProject