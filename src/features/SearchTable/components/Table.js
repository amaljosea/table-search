import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSearchData, deleteItem } from '../searchSlice'

const Table = () => {
    const dispatch = useDispatch()
    const searchData = useSelector(getSearchData)
    const onDeleteClick = (imdbID) => {
        dispatch(deleteItem(imdbID))
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {searchData.map((row) => (
                        <tr key={row.imdbID}>
                            <td>{row.Title}</td>
                            <td>{row.Year}</td>
                            <td>{row.imdbID}</td>
                            <td><button onClick={() => onDeleteClick(row.imdbID)}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!searchData.length && <p>No data</p>}
        </>
    )


}

export default Table