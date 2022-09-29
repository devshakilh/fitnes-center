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

            </div>
        </div>
    );
};

export default Fitnes;