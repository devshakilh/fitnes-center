import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import Selected from '../Selected/Selected';
import './Fitnes.css';


const Fitnes = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);
    const handleClick = (players) => {
        console.log(players);
        const newCart = [...cart, players];
        setCart(newCart);
    }


    return (
        <div>

            <div className="home-container">

                <div className="left">
                    <h1>Barishl-Fitnes-Center</h1>

                    <h3>Select today's exercise</h3>
                    <div className='cart'>
                        {
                            players.map(players => <Gym players={players}
                                handleClick={handleClick}
                            ></Gym>)
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

                    <Selected ></Selected>
                </div>

            </div>

            <div className='qus'>

                <div>
                    <h1>How dose react work?</h1>
                    <p className='qus-font'> React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or
                        props</p>
                </div>
                <div>
                    <h1>What is diffrence props and state</h1>
                    <p className='qus-font'>Props are used to pass data from one component to another. The state is a local data storage that is local to
                        the component only and cannot be passed to other components.J</p>
                </div>
                <div>
                    <h1>what else dose the useeffect api do other load data?</h1>
                    <p className='qus-font'>Running on state change: validating input field <br />
                        Running on state change: live filtering <br />
                        Running on state change: trigger animation on new array value <br />
                        Running on props change: update paragraph list on fetched API data update  <br />

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Fitnes;