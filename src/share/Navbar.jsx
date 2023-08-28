import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/head-bg.feae1f5a.png';
import image1 from '../assets/3135715.png';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const userLogOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.log(err))
    }
    
    return (
        <div style={{ backgroundColor: "#282637" }} >
            <div className='flex justify-between py-3 mr-5'>
                <div>
                    <label htmlFor="my-drawer-2" className=" lg:hidden btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                </div>
                <div className='flex justify-between'>
                    <button className="btn mr-3" onClick={() => window.my_modal_3.showModal()}>GIFT CODE</button>
                    <Link className='btn mr-3'>Bal $00.0</Link>
                    {
                        user?.uid ?
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                         <img src={image1} alt="" className='w-8'/>
                         <small>{user.displayName}</small>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content -ml-14 mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-32">
                          <li><Link to='/profile'>Profile</Link></li>
                          <li><Link to='/deposit'>Deposit</Link></li>
                          <li><Link to='/transaction'>Transaction</Link></li>
                          <li><button onClick={() => userLogOut()}>Log out</button></li>
                        </ul>
                      </div>

                            :
                            <Link to='/login'
                                className="flex btn bg-red-500 text-white px-4 py-2 rounded-md animate-bounce">
                                Login
                            </Link>
                    }
                </div>
            </div>
            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box p-0">
                    <button className="btn btn-xl text-3xl text-white btn-circle btn-ghost absolute right-3 top-3">✕</button>
                    <h1 className='absolute top-32 text-amber-500 left-40 font-mono text-3xl'>oneplayzone</h1>
                    <h1 className='absolute top-44 text-amber-500 left-2 font-mono text-xl'>Use the Gift-code for a chance to get 10 USDT</h1>
                    <img src={image} alt="" className='h-56 w-full' />
                    <h1 className='mt-3 text-xl text-center'>New Code</h1>
                    <div className='flex justify-center mt-5'>
                        <input type="text" className='input text-white text-3xl input-bordered w-4/5 border-white' />
                    </div>
                    <div className='flex justify-center mt-3'>
                        <button className='btn btn-secondary mb-3'>Confirm</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default Navbar;