import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSearchText, searchAsync } from '../searchSlice'

const Search = () => {
    const dispatch = useDispatch()
    const onSearch = (event) => {
        dispatch(searchAsync(event.target.value))
    }

    return (
        <input type="text" placeholder="Search.." value={useSelector(getSearchText)} onChange={onSearch} />)
}

export default Search