import { PrimaryButton } from "../Buttons/Buttons"
import { Divider } from "../Divider/Divider"
import { SearchField } from "../SearchField/SearchField"
import { BasicTable } from "../Tables/Tables"
import "./Dashboard.scss"

const Dashboard = () => {
    return(
        <div className="dashboard">
            <div className="dashboard-header">
                <PrimaryButton/>
                <SearchField/>
            </div>
            <Divider/>
            <div className="dashboard-body">
                <BasicTable/>
            </div>
        </div>
    )
}

export { Dashboard }