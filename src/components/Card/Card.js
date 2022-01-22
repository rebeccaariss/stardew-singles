import React from 'react';
import GiftList from '../GiftList/GiftList';
import UserImages from '../UserImages/UserImages';
import Scroll from '../Scroll/Scroll';

const Card = ({ name, bio, gender, pronouns, birthday, location, link, loves, likes }) => {
    return (
        <div className='tl bg-white dib br3 pa3 ma2 grow bw2 shadow-5 o-80' name={name} id='card'>
            <Scroll>
            <div>
                <UserImages name={name} />
            </div>
            <div>
                <h2 className='tc'>{name}</h2>
                <h3>Bio</h3>
                <p>{bio}</p>
                <h3>Pronouns</h3>
                <p>{pronouns}</p>
                <h3>Birthday</h3>
                <p>{birthday}</p>
                <h3>Address</h3>
                <p><a className='link blue hover-dark-blue' href={link} target='_blank' rel='noreferrer'>{location}</a></p>
                <h3>Best Gifts (Loves)</h3>
                    <GiftList gifts={loves} />
                <h3>Other Gifts (Likes)</h3>
                    <GiftList gifts={likes} />
            </div>
            </Scroll>
        </div>
    );
}

export default Card;
