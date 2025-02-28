import React from 'react'

const LoadingScreen = () => {
  return (
      <div className='flex flex-col items-center justify-center fixed inset-0 z-50 bg-black text-grey-100'>
            <div className='mb-4 text-4xl font-mono font-bold'>Hello World</div>
      </div>
  )
}

export default LoadingScreen