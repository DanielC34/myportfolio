import React from 'react';

export default function Footer() {
  return (
    <div className="w-full justify-center space-x-2 bg-slate-100 p-5 text-center text-gray-400 md:flex">
      <div>Created by Daniel Chanda</div>
      <div>
        <a
          href="https://github.com/DanielC34/myportfolio"
          target={'_blank'}
          rel="noreferrer"
          className="text-cyan-500"
        >
          ( Repo Link )
        </a>
      </div>
    </div>
  );
}
