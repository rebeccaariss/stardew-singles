import React from 'react';

const GiftList = ({ gifts }) => {
    return (
        <div>
            <ul className='list pl0'>
                {
                    gifts.map((gift, i) => {
                        return (
                            <li>
                                <a href={gift.link} class="link blue hover-dark-blue" target="_blank" rel="noreferrer">{gift.item}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default GiftList;
