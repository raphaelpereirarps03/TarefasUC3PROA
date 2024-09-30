
import Lista from './Lista'

function HelloWorld() {

    {/*
        -> Permite dividir a aplicação em partes;
        -> Os componentes renderizam JSX, assim como App.js (que é um componente);
        -> Precisamos criar um arquivo de componente;
        -> E importá-lo onde precisamos utilizar;
        -> Normalmente fica em uma pasta chamada "components".

    */}
    return (
        <div>
            <h1>
                Meu primeiro componente
            </h1>

            <Lista />

        </div>
    )
}

export default HelloWorld;