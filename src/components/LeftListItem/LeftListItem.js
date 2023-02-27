import "./LeftListItem.scss"

const LeftListItem = (props) => {
    return(
        <li className={`list-item ${props.isSelected ? "selected" : ""}`} onClick={props.onClickItem}>
            {props.text}
        </li>
    )
}

export { LeftListItem }