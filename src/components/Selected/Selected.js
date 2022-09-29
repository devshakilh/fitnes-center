import React from 'react';
import './Selected.css';
import Swal from 'sweetalert2'


const Selected = (props) => {

    return (
        <div>

            <h1>thi sisi </h1>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h3>Exercise time{props.length}
                </h3>
                <span>00</span>seconds
            </div>
            <div className='break-time'>
                <h3>Break Time</h3>
                <span>00</span>seconds
            </div>
            <button className='activity-complete'>Activity Complete</button>


        </div>
    );
};

export default Selected;