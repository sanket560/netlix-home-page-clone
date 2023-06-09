import React from 'react'

const margin = { 
    margin : 'auto',
    width : '40%',
}
function Subscribe() {
    return (
      <div className='mt-10 flex flex-col justify-center items-center' style={margin}>
        <p className='text-2xl text-white my-6 '>
          Subsrcibe to get new Membership offers
        </p>
        <div className='w-full ml-20'>
          <input type='text' className='py-3 w-8/12' />
          <button className='bg-red-700 px-6 py-3 text-white'>Subscribe</button>
        </div>
      </div>
    );
}

export default Subscribe;