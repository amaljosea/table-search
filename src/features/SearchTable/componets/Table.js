import React from 'react'
import { useSelector } from 'react-redux';
import { getSearchData } from '../searchSlice'

const Table = () => {
    const searchData = useSelector(getSearchData)
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
                {!searchData.length && <p>No data</p>}
                {searchData.map((row) => (
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