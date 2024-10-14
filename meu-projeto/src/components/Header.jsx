import Style from './css_modules/Header.module.css'

function Header () {

    return (
        <>
            <div className={Style.cabecalho}>
                <h1 className={Style.titleHeader}>
                    Olá
                </h1>
            </div>

        </>
    )
}

export default Header