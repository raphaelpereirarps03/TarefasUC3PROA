function SeuNome({setNome}) {
    /*
        --------- State Lift ---------

        -> State lift é uma técnica utilizada para compartilhar o state entre diferentes componentes;

        -> O state é compartilhado através de uma função que recebe o state atual e retorna  o novo state;

        -> O state é atualizado apenas quando a função é chamada;

        -> É normal vários componentes dependerem do mesmo estado;

        -> Então precisamos elevar o nível do mesmo a um componente pai (neste caso, o App.js);

        -> Então centralizamos o state no pai, e definimos quem usa e quem define (setState);

                                            ------------ Analogia  ------------
        Temos o text, que é a mensagem digitada pelo usuário e ela é uma useState e para manipular este texto temos o componente input. Eu quero que exibir este texto em um outro componente, ou seja, o usuário digitaria no input e mudaria o estado deste text tanto no input em si quanto na exibição. Para fazer isso, para os dois componentes (input e visualização) tenham acesso à mesma useState, eu levo esta useState para o componente pai de ambas. Isso seria o uso de State lift. 

        Agora, para fazer a mesma coisa, mas sem usar o state lift, eu teria que passar o valor desta useState como props do componente input para o componente de visualização, seria isso? 
        Ou seja, eu falaria para o input: Pega esse texto digitado e divide com o componente de visualização. Aí o input se deslocaria até o componente de visualização e faria isso. 

        Usando o state lift, eu poupo o input, eu falo pra ele colocar no componente pai e aí o texto vai ficar disposto para o componente de visualização pegar quando for necessário, deixo lá numa caixinha e ele pega quando quiser.



                                            ------------ Explicação  ------------
        Com o state lift, a useState é movida para um componente pai, permitindo que o input e a exibição compartilhem o mesmo estado. Sem state lift, o valor teria que ser passado do input para o componente de visualização manualmente via props, tornando o processo mais complexo.

    */

    return (
        <div>
            <p> Digite seu nome: </p>
            <input 
            type='text' 
            placeholder="Qual é o seu nome?" 
            onChange={(e) => setNome(e.target.value)}/>

        </div>
    )
}

export default SeuNome;