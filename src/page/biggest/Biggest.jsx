import React from 'react';
import { BsFillTrophyFill } from 'react-icons/bs';
import { RxTimer } from 'react-icons/rx';

const Biggest = () => {
    const data = [
        {
          gmail: "obaidul@gmail.com",
          profit: "438768",
          game : "wingo"
        },
        {
          gmail: "saiful@gmail.com",
          profit: "48539",
          game : "roulette"
        },
        {
          gmail: "akash@gmail.com",
          profit: "458734",
          game : "crash"
        },
        {
          gmail: "mahfuz@gmail.com",
          profit: "587349",
          game : "dingdong"
        },
        {
          gmail: "mursalin@gmail.com",
          profit: "28732",
          game : "roller"
        },
        {
          gmail: "ridoy@gmail.com",
          profit: "4587345",
          game : "wingo"
        },
        {
          gmail: "pogopogo@gmail.com",
          profit: "456757",
          game : "roulette"
        },
        {
          gmail: "iamtoobak@gmail.com",
          profit: "536634",
          game : "dingdong"
        },
      ];
    return (
        <div className="overflow-x-auto flex gap-5 mt-10">
        <div className='w-full hidden lg:block'>
          <h1 className='text-2xl flex items-center gap-2 font-semibold mb-5'><BsFillTrophyFill/>BIGGEST TODAY</h1>
        <table className="table bg-slate-800 text-white">
          {/* head */}
          <thead>
            <tr className='text-white'>
              <th className='text-lg'>RANK</th>
              <th className='text-lg'>JOB</th>
              <th className='text-lg'>PROFIT</th>
            </tr>
          </thead>
          <tbody>
           {
            data.map((table, index) =>
              <tr key={index}>
              <td>
                <div className="flex items-center space-x-3">
                  <div >
                    <div className="w-12 h-12">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </td>
              <td>
               {table.gmail}
              </td>
              <td>$ {table.profit}</td>
  
            </tr>
            )
           }
          </tbody>
        </table>
        </div>
      <div className='w-full'>
        <h1 className='text-2xl flex items-center gap-2 font-semibold mb-5'><RxTimer/>LATEST ROUNDS</h1>
      <table className="table bg-slate-800 text-white">
          {/* head */}
          <thead>
            <tr className='text-white'>
              <th className='text-lg'>GAME</th>
              <th className='text-lg'>PLAYER</th>
              <th className='text-lg'>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
           {
            data.map((table, index) =>
              <tr key={index}>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="w-12 h-12">
                      {table.game}
                    </div>
                  </div>
                </div>
              </td>
              <td>
               {table.gmail}
              </td>
              <td>$ {table.profit}</td>
  
            </tr>
            )
           }
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default Biggest;