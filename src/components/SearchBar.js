import React from 'react'

export default function SearchBar(props) {
    return (
        <div className='search-bar'>
            <p>Search: </p>
            <input onChange={props.handleSearch}></input>
        </div>
  )
}
