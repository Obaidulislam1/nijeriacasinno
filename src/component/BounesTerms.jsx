import React from 'react';

const BounesTerms = () => {
    return (
        <div className='lg:ml-5 px-5 lg:mt-10 text-white'>
            <div>
                <h1 className='font-semibold mb-2 text-2xl'>Bonus accrual</h1>
                <p>1.1. Bonus funds are credited to a separate bonus account.</p>
                <p>1.2. Only one bonus can be on the bonus account at a time.</p>
                <p>
                    1.3. To receive another bonus, you must either wager or cancel the existing bonus.
                </p>
            </div>
            <div>
                <h1 className='font-semibold mb-2 mt-2 text-2xl'>Bets with bonus funds and wagering</h1>
                <p>2.1. If you have funds both on a real funds account and on a bonus account, depending on the Rollover type, funds are spent differently.</p>
                <p>2.1.1. Real and bonus - funds are spent proportionally from the bonus and real accounts.</p>
                <p>2.1.2. Real - first of all, real funds are spent, and then bonus ones.</p>
                <p>2.1.3. Bonus - first of all, bonus funds are spent, and then real ones.</p>
                <p>2.2. Betting by bonus funds is possible only on events whose odds are within the limits indicated for each particular bonus.</p>
                <p>2.3. Bets made by real funds at the time of participation in the bonus campaign, on the odds lower than specified in the conditions of each specific bonus, are not counted in the amount of wagering.</p>
                <p>2.4. Winnings from bets made by bonus funds are credited to the bonus account.</p>
                <p>2.5. Winnings from bets made by real funds while participating in the bonus campaign are credited to the real funds account.</p>
                <p>2.6. The moment of wagering onset means the moment of reaching the necessary amount of turnover of the settled bets for the amount indicated in the conditions of each specific bonus.</p>
                <p>2.7. All funds from the bonus account are automatically transferred to the real funds account at the moment of wagering.</p>
                <p>2.8. Maximum transfer - the maximum amount that can be transferred automatically to a real funds account in the event of wagering. The rest of the amount of bonus funds will be debited.</p>
                <p>2.9. Withdrawal from a bonus account is not possible.</p>
                <p>2.10. At the time of winning back the bonus:</p>
                <p>2.10.1. Unsettled bets made only by bonus funds during the period of participation in the bonus campaign are cancelled without a refund of the bet amounts.</p>
                <p>2.10.2. In unsettled bets made by both real and bonus funds, part of the bet made on bonus funds is reset.</p>
            </div>
            <div>
                <h1 className='font-semibold mb-2 mt-2 text-2xl'>Cancellation of bonuses</h1>
                <p>3.1. The player can cancel the accrued bonus at any time.</p>
                <p>3.2. The bonus is automatically cancelled upon the expiration of the bonus validation date.</p>
                <p>3.3. When the bonus is cancelled, the bonus account is completely reset.</p>
                <p>3.4. When a bonus is cancelled, unsettled bets made by bonus funds are cancelled without a refund.</p>
                <p>3.5. When a bonus is cancelled, winnings at unsettled bets made by real funds are refunded to the real balance.</p>
            </div>
            <div>
                <h1 className='font-semibold mb-2 mt-2 text-2xl'>Limitations</h1>
                <p>4.1. One bonus / freespin / freebet can be used only once by one person, a family, within the same address, IP address, computer or other devices.</p>
                <p>4.2. Malfunction voids all pays and plays.</p>
            </div>
            <div>
                <h1 className='font-semibold mb-2 mt-2 text-2xl'>Change of conditions</h1>
                <p>5.1. The conditions of each specific bonus can be changed without notifying the user.</p>
                <p>5.2. The company reserves the right to cancel bonuses without notifying the user.</p>
            </div>
            <h1>Under "Bonus" definition the company mean any promotion such as freebet, freespin, gift, bonus code, etc.</h1>
        </div>
    );
};

export default BounesTerms;