import "./Header.scss"

const Header = () => {
    return(
        <header>
            <div className="header-container">
                <h1 className="title">Portafolio - admin</h1>
                <a className="portafolio-link" href="https://sdanielbs.github.io/portafolio/" target="_blank"  rel="noreferrer">Go to site</a>
            </div>
        </header> 
    )
}

export { Header }