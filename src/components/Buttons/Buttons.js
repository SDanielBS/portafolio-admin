import "./Buttons.scss"

const PrimaryButton = () => {
    return(
        <button className="button button-primary">
            Primary
        </button>
    )
}

const LiteButton = () => {
    return(
        <button className="button button-lite">
            Lite
        </button>
    )
}

export { PrimaryButton, LiteButton }