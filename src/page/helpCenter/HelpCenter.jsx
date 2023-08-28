import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const HelpCenter = () => {
  return (
    <div>
      <div className='flex justify-between mb-5 px-5'>
        <h1 className='text-2xl font-semibold'>Help center</h1>
        <label htmlFor="helpCenter" className="btn drawer-button lg:hidden"><BiArrowBack className='text-2xl' />BACK</label>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="helpCenter" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mt-24 lg:mt-1">
          <label htmlFor="helpCenter" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className='mb-6'><Link to='/helpCenter'>What Is The Withdrawable Amount?</Link></li>
            <li className='mb-6'><Link to='/helpCenter/minerfee'>What Is Miner Fee？</Link></li>
            <li className='mb-6'><Link to='/helpCenter/termsOfService'>Terms Of Service</Link></li>
            <li className='mb-6'><Link to='/helpCenter/kyc'> ONEPLAYZONE KYC Policy</Link></li>
            <li className='mb-6'><Link to='/helpCenter/responsibleGaming'>Responsible Gaming</Link></li>
            <li className='mb-6'><Link to='/helpCenter/bonusTerms'>Bonus Terms</Link></li>
            <li className='mb-6'><Link to='/helpCenter/amlpolicy'>Aml Policy</Link></li>
            <li className='mb-6'><Link to='/helpCenter/selfExclution'>Self Exclusion Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;