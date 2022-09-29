import React from 'react';
import './Gym.css';

const Gym = (props) => {
    const { name, img, time, age, details_short } = props.players;
    //    const {handleClick}= props;

    return (
        <div className='gym'>
            <img src={img} alt="" />
            <h3 className='gym-name'>{name}</h3>
            <p className='gym-details'>{details_short}</p>
            <p> For Age:{age}</p>
            <p>Time requried:{time}</p>
            <button onClick={() => props.handleClick(props.players.time)} className='add-btn'>Add To list</button>

        </div>
    );
};

export default Gym;