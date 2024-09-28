import Item from './Item'

function Lista2() {
    return (
        <>
        <h1> Minha Lista </h1>
        <ul>
            <Item marca="Ferrari" anoLancamento={1985}/>
            <Item marca="Fiat"  anoLancamento={1964} />
            <Item marca = "Renault"  anoLancamento={1980} />
            <Item marca ="Volkswagen"  anoLancamento={1950} />
            <Item />

        </ul>
        </>
    )
}

export default Lista2