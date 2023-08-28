import React from 'react';
import { LuGamepad2 } from 'react-icons/lu';
import image1 from '../../assets/CAM-65624_Luck-Casino-8_Teaser-mock-up-1657014102382_tcm1841-387549.jpg';
import image2 from '../../assets/Screenshot 2023-08-17 161846.png'
import image3 from '../../assets/main-qimg-47c0a20d5465a82060a965ac30c3cc30-lq.jpeg'
import image4 from '../../assets/mega-wheel-live-tile.jpg'
import image5 from '../../assets/png-transparent-ludo-dice-dice-game-dice-online-casino-thumbnail-removebg-preview.png'
import image6 from '../../assets/sexy-gaming-fb.jpg'
import image7 from '../../assets/CAM-65624_Luck-Casino-8_Teaser-mock-up-1657014102382_tcm1841-387549.jpg'
import image8 from '../../assets/main-qimg-47c0a20d5465a82060a965ac30c3cc30-lq.jpeg'
import image9 from '../../assets/mega-wheel-live-tile.jpg'

const Slot = () => {
    const inhouseCasino = [
        {
            name: 'Roulette',
            image : image1
        },
        {
            name: 'Crash',
            image: image2
        },
        {
            name: 'Wingo',
            image: image3
        },
        {
            name: 'Dice',
            image: image4
        },
        {
            name: 'Lucky Roller',
            image : image5
        },
    ]
    return (
      <div>
         <div className='flex items-center'>
                        <span className='text-3xl mr-2'><LuGamepad2 /></span>
                        <span className='text-2xl mr-4 font-bold'>Slots</span>
                        <p className='my-5'>by Yebet</p>
                    </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
            inhouseCasino.map((data, index) =>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 rounded-2xl hover:shadow-2xl">
                  <img
                    className="object-cover font-bold rounded-2xl h-44"
                    src={data.image}
                    alt="Person"
                  />
                  <p className='text-xl text-center my-2'>{data.name}</p>
                  <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <button className='text-2xl'>Play</button>
                  </div>
                </div>
              </div>
            )
        }
      </div>
      </div>
    );
};

export default Slot;