import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLoading, searchAsync, } from '../searchSlice'
import useDebounce from '../../../hooks/useDebounce'

const Search = () => {
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()
    const searchTextDebounce = useDebounce(searchText, 250)

    const onSearch = (event) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        dispatch(searchAsync(searchTextDebounce))
    }, [searchTextDebounce])
    return (
        <>
            <input type="text" placeholder="Search.." value={searchText} onChange={onSearch} />
            {useSelector(getLoading) && <p>Loading...</p>}
        </>
    )
}

export default Search