import React from 'react';

const Minerfee = () => {
    return (
        <div className='lg:ml-5 px-5 lg:mt-10 text-white'>
            <div>
                <h1 className='font-semibold text-xl mb-2'>Why does it take withdraw fee?</h1>
                <p>When we make a transaction, the information is broadcast to the network, and the miners collect and package the production blocks, and only after the block is produced, the transaction is recognized. Although the miners will get a fixed monetary reward after digging into the block, according to the rules, the reward will gradually be halved and become less and less, and eventually the miners may not be profitable. Therefore, transaction fees are needed to maintain the enthusiasm of miners for mining.</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mb-2 mt-2'>The role of the Withdraw fee</h1>
                <p className='font-semibold'>1.Encourage miners to mine</p>
                <p className='font-semibold'>2.Prevent excessive small transactions from hitting the network. Due to the P2P network, the ability of transaction processing is limited. If everyone frequently conducts small transactions, the network will be congested, causing delays or even stagnation. So set a threshold, the amount of natural transactions will be reduced when there is a small transaction.</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mb-2 mt-2'>How much is the Withdraw fee?</h1>
                <p className='font-semibold'>Since the transaction is a two-way charge, it means that the sale of a digital currency requires at least a 0.1% Withdraw fee to the platform.</p>
            </div>
        </div>
    );
};

export default Minerfee;