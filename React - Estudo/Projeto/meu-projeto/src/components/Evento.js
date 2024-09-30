import Button from './evento/Button'

function Evento({ numero }) {
    /*
        -> Os eventos do react são os mesmos eventos do DOM;

        -> Ou seja, temos eventos para responder a um click;

        -> O evento é atrelado a uma tag que irá executá-lo;

        -> Geralmente é um método é atribuído ao evento;

        -> Este dmétodo deve ser criado NO COMPONENTE;

        ->  O método deve ser chamado com o mesmo nome do evento;
        
        ->  Exemplo: <button onClick={handleClick}>Clique aqui</button>;

        ------------------------------ Métodos por Props ------------------------------

        -> Os métodos são passados como props para os componentes filhos;

        -> O componente filho pode chamar o método pai;

        -> O método pai pode ser chamado com o mesmo nome do método;

        -> Exemplo: <MeuBotao onClick={handleClick}/>;

        -> O método pai deve ser criado no componente pai;

        -> Vamos acessar o método por meio de um evento

        -> A sintaxe é a mesma de uma props de dados

    */

    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento!`)
    }

    return (

        <>
            <p>
                Clique para disparar um evento: 
            </p>
            <Button event= {meuEvento} text="Primeiro Evento"/>
            <Button event= {segundoEvento} text="Segundo Evento"/>

        {/* 
            <button onClick={meuEvento}>
                Ativar
            </button> 
        */}
        </>
    )

}

export default Evento;