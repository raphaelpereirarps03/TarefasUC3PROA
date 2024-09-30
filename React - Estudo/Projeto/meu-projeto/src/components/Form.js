import {useState} from 'react'

function Form () {

    const [name, setName] = useState ('');
    const [password, setPassword] = useState ('');

    function cadastrarUsuario(e) {

        /* Ao enviar o formulário, o dado está sendo perdido pois a página está sendo recarregada, então colocamos este  código para capturar o evento e impedir a recarga da página e.preventDefault() 
        
        -> useState é um hook do React;
        -> Com ele conseguimos manusear o estado de um componente forma somples;
        -> Este hook funciona muito bem com eventos;
        -> Podemos atrelar a um evento a mudança de state;
        ->  O estado é uma variável que pode ser alterada;

        */

        e.preventDefault()

        console.log (`O usuário ${name} foi cadastrado com a senha: ${password}`)
        // console.log(name)
        // console.log(password)
        // console.log('Cadastrou o usuário! ')
    }

    return (
        <div>
            <h1>
                Meu Cadastro: 
            </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"> Nome: </label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder= "Digite a sua senha: "
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                <label htmlFor="password"> Senha: </label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        placeholder= "Digite a sua senha: "
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>

            </form>
        </div>
    )
}

export default Form;