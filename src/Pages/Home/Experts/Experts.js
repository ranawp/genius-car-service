import React from 'react';
import expert1 from '../../../image/experts/expert-1.jpg';
import expert2 from '../../../image/experts/expert-2.jpg';
import expert3 from '../../../image/experts/expert-3.jpg';
import expert4 from '../../../image/experts/expert-4.jpg';
import expert5 from '../../../image/experts/expert-5.jpg';
import expert6 from '../../../image/experts/expert-6.png';
import Expert from '../Expert/Expert';

const expert = [
    { id: 1, name: 'wiil smith', img: expert1 },
    { id: 2, name: 'chirs Rock', img: expert2 },
    { id: 3, name: 'Dwayne Rock', img: expert3 },
    { id: 4, name: 'Messy vai', img: expert4 },
    { id: 5, name: 'Rolando Bro', img: expert5 },
    { id: 6, name: 'Stacky Jhonson', img: expert6 }]
const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h3>Our experts</h3>
            <div className='row'>
                {
                    expert.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;