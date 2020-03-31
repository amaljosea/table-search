import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLoading, getSearchText, searchAsync, } from '../searchSlice'

const Search = () => {
    const dispatch = useDispatch()
    const onSearch = (event) => {
        dispatch(searchAsync(event.target.value))
    }
    useEffect(() => {
        dispatch(searchAsync(''))
    }, [])
    return (
        <>
            <input type="text" placeholder="Search.." value={useSelector(getSearchText)} onChange={onSearch} />
            {useSelector(getLoading) && <p>Loading...</p>}
        </>
    )
}

export default Search