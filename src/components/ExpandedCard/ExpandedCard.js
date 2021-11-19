import React from 'react';
import CloseButton from './CloseButton';
import Card from './Card';

const ExpandedCard = ({ candidates }) => {
    return (
        <div>
            <CloseButton />
            <Card 
                key={candidates[i].id} 
                // images={} 
                name={candidates[i].name} 
                // bio={candidates[i].bio} 
                gender={candidates[i].gender} 
                birthday={candidates[i].birthday} 
                address={candidates[i].address} 
                loves={candidates[i].loves} 
                likes={candidates[i].likes} 
            />
        </div>
    )
}

export default ExpandedCard;
