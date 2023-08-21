import React from 'react';
import { LuGamepad2 } from 'react-icons/lu';
import image from '../../assets/blackjack-cards.png';
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
                    <div className='flex items-center'>
                        <span className='text-3xl mr-2'><LuGamepad2 /></span>
                        <span className='text-2xl mr-4 font-bold'>IN-HOUSE GAMES</span>
                        <p className='my-5'>by Yebet</p>
                    </div>
                    <div className='mt-3'>
                        <Inhouse></Inhouse>
                    </div>
                </div>
                <div>
                    <p className='my-5 text-2xl font-bold'>Slots</p>
                    <Slot></Slot>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={image} alt="" className='w-7 mr-2' />
                        <p className='my-5 text-2xl font-bold'>LIVE CASINO
                        </p>
                    </div>
                    <LiveCasino></LiveCasino>
                </div>
            </div>

            <Biggest></Biggest>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;