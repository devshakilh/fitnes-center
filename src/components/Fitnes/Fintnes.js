import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Fitnes.css';


const Fitnes = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    return (
        <div>

            <div className="home-container">

                <div className="left">
                    <h1>Barishl-Fitnes-Center</h1>
                    <h3>Select today's exercise</h3>
                    <div className='cart'>
                        {
                            players.map(players => <Gym players={players}></Gym>)
                        }
                    </div>
                </div>

                {/* right side ------------- */}
                <div className="right-side">
                    <div className='name-area'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className='name-and-ct'>
                            <h2>Shakil Hossain</h2>
                            <p>Barishal,Bangladesh</p>
                        </div>

                    </div>
                    <div className='my-height'>
                        <div >
                            <h1>55</h1>
                            <span>weight</span>
                        </div>
                        <div>
                            <h1>5.5</h1>
                            <span>Height</span>
                        </div>
                        <div>
                            <h1>18</h1>
                            <span>Age</span>
                        </div>
                    </div>
                    <h3>Add A Break</h3>
                    <div className='add-break'>
                        <p>10s</p>
                        <p>20s</p>
                        <p>30s</p>
                        <p>40s</p>
                        <p>50s</p>
                    </div>
                    <h2>Exercise Details</h2>
                    <div className='exercise-time'>
                        <h3>Exercise time</h3>
                        <span>00</span>seconds
                    </div>
                    <div className='break-time'>
                        <h3>Break Time</h3>
                        <span>00</span>seconds
                    </div>
                    <button className='activity-complete'>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Fitnes;