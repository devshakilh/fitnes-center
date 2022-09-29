import React, { useState } from 'react';
import './Selected.css';
import Swal from 'sweetalert2'


const Selected = (props) => {
    function myfun() {
        alert('WOW GOOD JOB')
    }
    return (
        <div>

            <h3>Add A Break</h3>
            <div className='add-break'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>

            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h3>Exercise time
                </h3>
                <span>{props.cart}</span>seconds
            </div>
            <div className='break-time'>
                <h3>Break Time</h3>
                <span></span>seconds
            </div>
            <button onClick={myfun} className='activity-complete'>Activity Complete</button>


        </div>
    );
};

export default Selected;