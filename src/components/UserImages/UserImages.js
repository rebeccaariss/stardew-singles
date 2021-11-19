import React from 'react';

const UserImages = ({ name }) => {
    return (
        <div>
            <img className="db center w-30 br2 br--top" src={require(`../../images/${name}/0.png`).default} alt={name}></img>
            {/* <img src={require(`./images/${name}/1.png`).default} alt={name}></img>
            <img src={require(`./images/${name}/2.png`).default} alt={name}></img>
            <img src={require(`./images/${name}/3.png`).default} alt={name}></img> */}
        </div>
    )
}

export default UserImages;
