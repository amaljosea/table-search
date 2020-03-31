import React from 'react'

const tableData = [
    {
        "Title": "Waterworld",
        "Year": 1995,
        "imdbID": "tt0114898"
    },
    {
        "Title": "Waterworld",
        "Year": 1995,
        "imdbID": "tt0189200"
    }
]
const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row) => (
                    <tr>
                        <td>{row.Title}</td>
                        <td>{row.Year}</td>
                        <td>{row.imdbID}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )


}

export default Table