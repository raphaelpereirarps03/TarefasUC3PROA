import PropTypes from 'prop-types'

function Item ({marca, anoLancamento}) {
    return (
        <>
            <li> {marca} - {anoLancamento} </li>
        </>
    )
}

{/* 
    -> Podemos definir tipos para as props (exemplo abaixo), realizando uma espécie de validação;

    -> Definimos em um objeto chamado propTypes no próprio componente
    -> E ainda há a possibilidade de definir um valor padrão;

    -> Neste caso utilizamos o objeto defaultProps;

    ->  O padrão é utilizado quando não é passado o valor para a propriedade;

    ->   O tipo é utilizado para garantir que o valor passado seja do tipo correto, se não for, o React irá lançar um erro;
    
*/}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca:'Faltou marca',
    anoLancamento: 0
}

export default Item;