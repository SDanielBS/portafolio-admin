import "./Table.scss"

const BasicTable = () => {
    return(
        <div className="table-container">
            <table className="table">
                <thead className="table-header">
                    <th className="table-header-title">Titulo</th>
                    <th className="table-header-title">Desc</th>
                    <th colSpan="2" className="table-header-title">Actions</th>
                </thead>
                <tbody className="table-body">
                    <tr className="table-body-row">
                        <td className="table-body-data">Project 1</td>
                        <td className="table-body-data">Project 1 Desc</td>
                        <td className="table-body-data">Udate</td>
                        <td className="table-body-data">Delete</td>
                    </tr>
                    <tr className="table-body-row">
                        <td className="table-body-data">Project 2</td>
                        <td className="table-body-data">Project 2 Desc</td>
                        <td className="table-body-data">Udate</td>
                        <td className="table-body-data">Delete</td>
                    </tr>
                    <tr className="table-body-row">
                        <td className="table-body-data">Project 3</td>
                        <td className="table-body-data">Project 3 Desc</td>
                        <td className="table-body-data">Udate</td>
                        <td className="table-body-data">Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export { BasicTable }