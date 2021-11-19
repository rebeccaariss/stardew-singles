import React from 'react';
import Card from '../Card/Card';

const CardList = ({ candidates, characterImages }) => {
    return (
        <div>
            {
                candidates.map((candidate, i) => {
                    return (
                        <Card 
                            key={candidates[i].id} 
                            name={candidates[i].name} 
                            bio={candidates[i].bio} 
                            gender={candidates[i].gender} 
                            pronouns={candidates[i].pronouns} 
                            birthday={candidates[i].birthday} 
                            location={candidates[i].location[0].address} 
                            link={candidates[i].location[0].link} 
                            loves={candidates[i].loves} 
                            likes={candidates[i].likes}
                        />
                    );
                }) 
            }
        </div>
    );
}

export default CardList;
