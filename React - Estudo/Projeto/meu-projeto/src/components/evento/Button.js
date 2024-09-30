function Button (props) {
    /*Vamos imaginar assim:

        A página "App" é a "Chefe" de todos.

        A "Chefe" chama a página "Evento" e diz: "Aqui, você vai cuidar do evento número 1."

        A página "Evento" chama a página "Button" e diz: "Quando alguém clicar no botão, me avise!"

        Quando a página "Button" é clicada, ela liga para a "Evento" e fala: "Ei, o botão foi clicado, faça o que você precisa fazer agora!"

        Esse processo de passar o método é como a "Chefe" dando uma tarefa para o "Funcionário Evento", e o "Funcionário Evento" dando essa tarefa para o "Botão". E quando o "Botão" faz a tarefa, ele avisa a "Evento" que a ação foi realizada. */

    return <button onClick={props.event }>{props.text}</button>
}

export default Button