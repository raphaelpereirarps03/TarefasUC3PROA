function Pessoa({nome, idade, profissao, foto}) {

    /*
        -> Acima há um exemplo de uma props desestruturada, o que permite seu uso direto pelo nome, sem precisa passar o props.nome (exemplo abaixo);

        ->  O uso de props desestruturadas é mais comum em componentes funcionais, pois  não há necessidade de criar um objeto para passar os props.
    
    */

    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2> Nome:  {nome}</h2>
            <p> Idade {idade} </p>
            <p> Profissão: {profissao} </p>  
            

        </div>
    )
}

export default Pessoa;