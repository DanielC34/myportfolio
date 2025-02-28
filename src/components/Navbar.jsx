import React from 'react'

const Navbar = () => {
  return (
      <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
          <div className='max-w-5xl mx-auto px-4'>
              <div className='flex items-center justify-between h-16'>
                  <a href="#home" className='font-bold text-white font-mono text-xl'>
                      {""}
                      Daniel <span className='text-red-500'>Chanda</span>{""}
                  </a>

                    {/*Mobile Menu */}
                  <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden'>
                      
                  </div>
              </div>
          </div>
      </nav>
  )
}

export default Navbar