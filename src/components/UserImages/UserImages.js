import React from 'react';

const UserImages = ({ name }) => {
    return (
        <div>
            <img className='db center w-30 br2 br--top' src={require(`../../images/${name}/0.png`)} alt={name}></img>
            {/* <img src={require(`../../images/${name}/1.png`)} alt={name}></img>
            <img src={require(`../../images/${name}/2.png`)} alt={name}></img>
            <img src={require(`../../images/${name}/3.png`)} alt={name}></img> */}
            {/* Note that previous formatting for images looked like this:

            <img className='db center w-30 br2 br--top' src={require(`../../images/${name}/0.png`).default} alt={name}></img> 
            
            While this previously worked, '.default' now leads to issue with image rendering. */}
        </div>
    )
}

export default UserImages;
