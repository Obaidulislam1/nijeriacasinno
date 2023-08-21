import React from 'react';
import image1 from '../assets/image4-6.jpg';
import image2 from '../assets/12-Best-Crypto-Casinos-Picked-by-High-Rollers-in-2022.jpg';
import image3 from '../assets/fanduel-360x190.jpg';
import image4 from '../assets/casino guru image.jpg';
import image5 from '../assets/feat-nfl-4-360x190.jpg';
const Testimonials = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center mt-10'>
        <div className='p-3'>
         <img src={image1} alt="" className='h-32 rounded-lg'/>
        </div>
        <div className='p-3'>
         <img src={image2} alt="" className='h-32 rounded-lg'/>
        </div>
        <div className='p-3'>
         <img src={image3} alt="" className='h-32 rounded-lg'/>
        </div>
        <div className='p-3'>
         <img src={image4} alt="" className='h-32 rounded-lg'/>
        </div>
        <div className='p-3'>
         <img src={image5} alt="" className='h-32 rounded-lg'/>
        </div>
     </div>
    );
};

export default Testimonials;