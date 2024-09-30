function Fragment() {

    {/* 
        -> Os React Fragmentes permitem a criação de um componente sem elemento pai;

        -> São usados quando não é necessário criar um elemento pai para o componente;

        -> O propósito é descomplicar os nós do DOM;

        -> A sintaxe é: <> e </>, não há um nome para a tag;

        ->  Não é possível atribuir um id ou uma classe a um Fragment;

        -> Criamos no próprio JSX;
        
        ->  Não é possível renderizar um Fragment diretamente no navegador;
        
    */}

    return(
        <>
            <h4> Testando Fragments</h4>
        </>
    )
}

export default Fragment;