import React from 'react';

const GiftList = ({ gifts }) => {
    return (
        <div>
            <ul className='list pl0'>
                {
                    gifts.map((gift, i) => {
                        return (
                            <li key={i}>
                                <a href={gift.link} className='link blue hover-dark-blue' target='_blank' rel='noreferrer'>{gift.item}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default GiftList;
