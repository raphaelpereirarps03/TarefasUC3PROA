import Style from './css_modules/Header.module.css'

function Header () {

    return (
        <>
            <div className={Style.cabecalho}>
                <h1 className={Style.titleHeader}>
                    Header da Página
                </h1>
            </div>

        </>
    )
}

export default Header