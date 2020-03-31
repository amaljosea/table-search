import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSearchData, deleteItem, sortData } from '../searchSlice'

const Table = () => {
    const dispatch = useDispatch()
    const searchData = useSelector(getSearchData)
    const onDeleteClick = (imdbID) => {
        dispatch(deleteItem(imdbID))
    }
    const onSelectChange = (key, event) => {
        dispatch(sortData({ order: event.target.value, key: key }))
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title
                            <select onChange={(event) => onSelectChange("Title", event)} >
                                <option value="ASC">^</option>
                                <option value="DESC">v</option>
                            </select></th>
                        <th>Year
                            <select onChange={(event) => onSelectChange("Year", event)} >
                                <option value="ASC">^</option>
                                <option value="DESC">v</option>
                            </select></th>

                        <th>imdbID
                            <select onChange={(event) => onSelectChange("imdbID", event)} >
                                <option value="ASC">^</option>
                                <option value="DESC">v</option>
                            </select></th>
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