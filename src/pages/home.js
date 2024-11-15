import React from 'react';
import Zambia from '../images/Zambia flag.png';
import codeBackground from '../images/code-background.jpg';


export default function Home() {
  return (
    <div
      className="relative h-[600px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${codeBackground})` }}
      id="home"
    >
      <div className="bg-gradient-radial absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center from-[rgba(0,0,0,0.4)] to-black p-5">
        <div className="w-full max-w-6xl space-y-4 text-center">
          <div className="w-full border-b border-gray-600 pb-2 text-center text-4xl text-gray-300 md:text-7xl">
            <span className="font-semibold">Daniel</span>{' '}
            <span className="font-semibold">Chanda</span>
          </div>
          <div className="flex flex-col items-center justify-center space-x-4 text-lg md:flex-row md:text-2xl">
            <div className="font-bold text-cyan-400">Software Developer</div>
            <div className="flex items-center space-x-4">
              <div className="font-extralight text-gray-300">from</div>
              <div className="relative h-8 w-10 md:h-10">
                <img className="h-full rounded-md" src={Zambia} alt="Zambia"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
