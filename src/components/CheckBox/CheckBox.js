import React from 'react';

const CheckBox = ({ gender, preferenceSelection }) => {
    return (
        <div>
            <input 
                type='checkbox' 
                id={gender} 
                name={gender} 
                onChange={preferenceSelection} 
                checked
            />
            <label htmlFor={gender}> {gender}</label>
        </div>
    )
}

export default CheckBox;
