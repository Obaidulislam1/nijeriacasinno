import React from 'react';
import Carusale from '../../component/Carusale';
import Inhouse from '../inhouse/Inhouse';
import LiveCasino from '../liveCasino/LiveCasino';
import Slot from '../slots/Slot';
import Biggest from '../biggest/Biggest';
import Testimonials from '../../component/Testimonials';

const Home = () => {
    return (
        <div>
            <Carusale></Carusale>
            <div>
                <div className='mt-7'>
                    
                    <div className='mt-3'>
                        <Inhouse></Inhouse>
                    </div>
                </div>
                <div>
                    <Slot></Slot>
                </div>
                <div>
                    <LiveCasino></LiveCasino>
                </div>
            </div>

            <Biggest></Biggest>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;