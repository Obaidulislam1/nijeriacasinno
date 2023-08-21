import React from 'react';
import image from '../assets/Untitled_design__2_-removebg-preview.png'
import images from '../assets/mega-wheel-live-tile.jpg'
import image1 from '../assets/blackjack-cards.png'
import image2 from '../assets/images (1).jpeg'
import image3 from '../assets/images (2).jpeg'
import image4 from '../assets/download (1).jpeg'
import image5 from '../assets/images.jpeg'
import image6 from '../assets/png-transparent-ludo-dice-dice-game-dice-online-casino-thumbnail-removebg-preview.png'
import image7 from '../assets/sexy-gaming-fb.jpg'
import { FcHome } from 'react-icons/fc';
import { AiFillCaretRight } from 'react-icons/ai';
import { LuGamepad2 } from 'react-icons/lu';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { TbFlag3 } from 'react-icons/tb';
import { BiSolidTimeFive } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../share/Navbar';
import Footer from '../share/Footer';

const Main = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">

            {/* hello */}
            <Navbar></Navbar>
            {/* Page content here */}
            <div className='w-11/12 px-3 m-auto mt-10'>
                <div style={{ backgroundColor: "#21202D" }}>
                    <Outlet></Outlet>
                </div>
            </div>
           <Footer></Footer>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
           <div>
           <ul style={{ backgroundColor: "#282637" }} className="menu h-full">
                {/* Sidebar content here */}
                <img src={image} alt="ima" className='w-1/2 mt-4 pl-1' />
                <li className='text-xl font-Montserrat font-bold mb-5 mt-4 font-mono'>
<Link to='/' className='focus:text-red-500 active:text-red-500'>
<FcHome />Home
</Link>
</li>
                <li className='text-xl font-mono font-bold mb-3'><Link ><LuGamepad2 className='text-2xl' />In-House Games</Link></li>
                <div className='grid grid-cols-4 gap-3 mx-4'>
                    <div className='rounded'><img src={images} className='w-12 h-12 rounded-xl bg-gray-900 p-2' alt="" /></div>
                    <div className='rounded'><img className='w-12 h-12 rounded-xl bg-gray-900 p-2' src={image3} alt="" /></div>
                    <div className='rounded'><img className='w-12 h-12 rounded-xl bg-gray-900 p-2' src={image4} alt="" /></div>
                    <div className='rounded'><img className='w-12 h-12 rounded-xl bg-gray-900 p-2' src={image5} alt="" /></div>
                    <div className='rounded'><img className='w-12 h-12 rounded-xl bg-gray-900 p-2' src={image6} alt="" /></div>
                    <div className='rounded'><img className='w-12 h-12 rounded-xl bg-gray-900 p-2' src={image7} alt="" /></div>
                </div>
                <li className='text-xl font-mono font-bold my-5'><Link > <img className='w-7 h-4' src={image2} alt="" /> Slots</Link></li>
                <li className='text-xl font-mono font-bold mb-5'><Link > <img src={image1} alt="" className='w-6' /> Live Casino</Link></li>
                <li className='text-xl font-mono font-bold mb-5'><Link ><MdOutlineFavoriteBorder className='text-2xl' />Favorites</Link></li>
                <li className='text-xl font-mono font-bold mb-5'><Link ><BiSolidTimeFive className='text-2xl' />Recent</Link></li>
                <li className='text-xl font-mono font-bold mb-5'><Link ><TbFlag3 className='text-2xl' />Referral</Link></li>
                <li className='text-xl btn font-mono font-bold mb-5'><Link ><AiOutlineQuestionCircle />Help Center<AiFillCaretRight /></Link></li>
                <select className="select btn select-bordered w-full max-w-xs">
                    <option disabled selected>English</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </ul>
           </div>
        </div>
    </div>
    );
};

export default Main;