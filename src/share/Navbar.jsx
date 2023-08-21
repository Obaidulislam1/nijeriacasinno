import React from 'react';
import { Link } from 'react-router-dom';


// hello

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#282637" }} >
        <div className='flex justify-between py-3'>
            <div>
                <label htmlFor="my-drawer-2" className="  lg:hidden btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
            </div>

            <div className=' flex'>

                <Link className='btn mr-2'>Gift Code</Link>
                <Link className='btn mr-2'>BTC 0.00000</Link>
                <Link to='/login' className='btn mr-2'>Login</Link>

                <Link to='/signup'
                    className="flex btn bg-red-500 text-white px-4 py-2 mr-5 rounded-md animate-bounce">
                    SIGN UP
                </Link>

            </div>
        </div>
    </div>
    );
};

export default Navbar;