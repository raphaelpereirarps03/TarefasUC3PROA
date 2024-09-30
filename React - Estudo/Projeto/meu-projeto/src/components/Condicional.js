import {useState} from 'react'

function Condicional () {

    /*
        ---------- Renderização por Condição  ----------

        -> A renderização por condição  é uma técnica usada para renderizar conteúdo dinamicamente;

        -> Ela  é usada quando precisamos renderizar conteúdo que depende de uma condição específica;

        -> Podemos atrelar a eibição de algum elemento a um if;

        -> Esta ação é chamada de renderização condicional;

        -> Envolvemos as tags em chaves {};

        -> Como as chaves executam Javascript criamos nossa condição;

        ->  Se a condição for verdadeira, o conteúdo dentro das chaves será renderizado;

        -> É possível usar o state para criar as condições.

    */

    const [email,setEmail] = useState ()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
        // console.log(userEmail)
    }

    function limparEmail() {
        setEmail(''); // Limpa o texto do input
        setUserEmail('');
    }
    

    return (
        <div>
            <h2> Cadastre seu email: </h2>
            <form>
                <input 
                name='email'
                value={email} 
                type='email' 
                placeholder='Digite seu email...' 
                onChange={(e) => setEmail (e.target.value)}/>
                <button type="submit" onClick={enviarEmail}> Enviar email </button>

                {/* Render Condicional */}
                {userEmail && (
                    <div>
                        <p> O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email </button>
                    </div>
                )} 
            </form>
        
        </div>
    )
}

export default Condicional;