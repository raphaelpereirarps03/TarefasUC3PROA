function SayMyName(props) {
    /*
        -> As props são valores passados para componentes;

        -> Podemos deixá-los dinâmicos;
        -> Ou seja, mudando a execução por causa do valor da props;

        -> O que à torna versátil, útil em diferentes contextos;

        ->  Podemos usar o props em qualquer lugar do componente;

        -> O valor é passado como um atributo na chamada do componente;

        -> E precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente;

        -> Podemos passar valores de qualquer tipo (string, número, objeto, etc);

        -> As props são somente de leitura.
    */

    return (
        <div>
            <p>
                Fala aí, {props.nome}. Suave?
            </p>


        </div>

    )
}

export default SayMyName;