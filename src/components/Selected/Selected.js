import React from 'react';
import './Selected.css';
import Swal from 'sweetalert2'


const Selected = (props) => {

    return (
        <div>

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
                <h3>Exercise time{props.length}
                </h3>
                <span>00</span>seconds
            </div>

            <button className='activity-complete'>Activity Complete</button>


        </div>
    );
};

export default Selected;