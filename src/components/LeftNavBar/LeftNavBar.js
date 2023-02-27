import { useState } from "react"
import { LeftListItem } from "../LeftListItem/LeftListItem"
import "./LeftNavBar.scss"

const LeftNavBar = () => {
    let NAVIGATION_ITEMS = [
        {
            name: "Projects",
            url: "http://localhost:3000/api/getProjectsDetail"
        },
        {
            name: "Projects links",
            url: "http://localhost:3000/api/getProjectsDetail"
        },{
            name: "Languages",
            url: "http://localhost:3000/api/getProjectsDetail"
        },
        {
            name: "Projects & Langs",
            url: "http://localhost:3000/api/getProjectsDetail"
        },
        {
            name: "Introduction",
            url: "http://localhost:3000/api/getProjectsDetail"
        },{
            name: "Contacts",
            url: "http://localhost:3000/api/getProjectsDetail"
        },
        {
            name: "Contacts links",
            url: "http://localhost:3000/api/getProjectsDetail"
        }
    ]

    const [indexItemSelected, setIndexItemSelected] = useState(0)

    const tableSelected = (e) => {
        const elementos = Array.from(e.target.parentNode.children);
        const posicion = elementos.indexOf(e.target);
        setIndexItemSelected(posicion)
    }

    let listItems = []
    NAVIGATION_ITEMS.forEach((element, id) => {
        listItems.push(<LeftListItem 
            key={id} 
            text={element.name} 
            url={element.url} 
            isSelected={id === indexItemSelected} 
            onClickItem={tableSelected}
            />)
    })

    return(
        <nav className="left-navigation-container">
            <ul className="list">
                {listItems}
            </ul>
        </nav>
    )
}

export { LeftNavBar }