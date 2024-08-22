import React from 'react';
import './home.css';
import Zambia from '../images/Zambia flag.png'

export default function Home() {
  return (
    <div className="home shadow-2xl" id="home">
      <div className="overlay flex flex-col items-center justify-center p-5">
        <div className=" w-full max-w-6xl space-y-4 text-center">
          <div className="w-full border-b border-gray-600 pb-2 text-center text-4xl text-gray-300 md:text-7xl">
            <span className=" font-semibold">Daniel</span>{' '}
            <span className="font-semibold">Chanda</span>
          </div>
          <div className=" flex flex-col items-center justify-center space-x-4 text-lg md:flex-row md:text-2xl">
            <div className=" font-bold text-cyan-400">
              Software Developer
            </div>
            <div className="flex items-center space-x-4">
              <div className=" font-extralight text-gray-300">from</div>
              <div className="relative h-8 w-10 md:h-10">
                <img
                  className="h-full"
                  src={Zambia}
                  alt="Zambia"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
