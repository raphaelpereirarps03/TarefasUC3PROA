function OutraLista({ itens }) {
    /*
                        ---------- Renderização de Listas  ----------

        -> Para renderizar uma lista vamos primeiramente precisar de um array;

        -> Depois utilizamos a função map, para percorrer cada um dos itens;

        -> Podendo assim renderizar algo na tela;

        -> É possível unir operadores condicionais com a renderização de listas;

        ->  Para isso, basta utilizar o if dentro da função map;

        ->   Assim, podemos renderizar apenas os itens que atendem a uma condição;


    */

    return (
        <>
            <h3> Lista de Coisas Boas: </h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}> {item} </p>
                        
            ))): (
                <p> Não há itens na lista </p>
            )} 
        </>
    )
}

export default OutraLista;