import React from 'react'

function Subhero() {
  return (
    <div className='bg-blue-100 font-mono px-4 h-16 flex items-center content-center justify-center [&>*]:ring-1 [&>*]:rounded-2xl'>
        <button className='btn bg-cyan-300 cursor-progress'>HOME</button>
        <button className='btn bg-cyan-300 cursor-not-allowed hover:disabled'>DEPARTMENTS</button>
        <button className='btn bg-cyan-300 cursor-crosshair'>MINISTRIES</button>
        <button className='btn bg-cyan-300 cursor-auto'>LEADERSHIP</button>
        <button className='btn bg-cyan-300'>GALLERY</button>
    </div>
  )
}

export default Subhero