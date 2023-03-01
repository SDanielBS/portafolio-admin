import { Dashboard } from "../Dashboard/Dashboard.js"
import { LeftNavBar } from "../LeftNavBar/LeftNavBar.js"
import "./Main.scss"

const Main = () => {
    return(
        <div className="main-container">
            <LeftNavBar/>
            <Dashboard/>
        </div>
    )
}

export { Main }