import React from 'react';

export default function Filter(props) {
    return (
        <div className='sort-bar'>
            <p>Sort by:</p>
            <select  onChange={props.handleSort}>
                <option value="" ></option>
                <option value="Name">Name</option>
                <option value="Level" >Level</option>
                <option value="Price">Price</option>
                <option value="HP" >HP</option>
                <option value="type" >Type</option>
            </select>
            
        </div>
        
  )
}
