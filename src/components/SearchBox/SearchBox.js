import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--lightest-blue bg-lightest-pink'
                type='search' 
                placeholder='search candidates'
                //onChange is like HTML DOM event handler onchange; camelCase per JSX syntax here:
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
