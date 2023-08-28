import React from 'react';

const WithdrowAmount = () => {
    return (
        <div className='lg:ml-5 px-5 lg:mt-10 text-white'>
            <div>
            <h1 className='font-semibold text-xl mb-2'>1. What is the withdrawable amount?</h1>
            <p>The withdrawable amount refers to the funds that you can withdraw to your wallet in yebet.It may be lower than your website balance, or it may be higher than your website balance.</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mb-2 mt-2'>2. Why is there the concept of withdrawable amount?</h1>
                <p>In order to prevent misbehaving users from using our site for illegal money laundering, and at the same time protecting the security of your account, we must take security precautions for withdrawals. With this scheme, your account will be more secure.</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mb-2 mt-2'>3. How to increase your withdrawable amount?</h1>
                <p>You can accumulate points by playing any game on the website. The more points, the higher the cash withdrawal amount.</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl mb-2 mt-2'>4. Why will the withdrawable amount be reduced?</h1>
                <p>There may be the following reasons：</p>
                <p>（1）After the withdrawal is successful, the withdrawable amount will be deducted</p>
                <p>（2）If you receive a reward from the website, a certain amount of withdrawable money will also be deducted</p>
            </div>
        </div>
    );
};

export default WithdrowAmount;