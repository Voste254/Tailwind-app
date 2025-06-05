import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='bg-blue-800 font-mono px-4 h-16 '>
  <div className='flex items-center content-center justify-between h-full'>
    <div>
      <Link to='/' className='text-4xl font-semibold text-white'>LOGO</Link>
    </div>
    <ul className="text-xl [&>*]:inline-block text-white font-bold [&>*]:mr-6">
      <li className=' '>
        <Link to='/'>Home</Link>
      </li>
            <li className=''>
        <Link to='/'>About Us</Link>
      </li>
            <li className=''>
        <Link to='/'>Contacts</Link>
      </li>
          <button className='btn'><Link to='/'>Login</Link></button>
          <button className='btn'><Link to='/'>Signup</Link></button>
    </ul>

  </div>
</nav>
    </div>
  )
}

export default Navbar