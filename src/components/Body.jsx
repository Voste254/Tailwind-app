import React from 'react'

function Body() {
  return (
    <div className='bg-blue-100 h-screen bg-gradient-to-tr from-blue-100 via-purple-400 to-pink-500 '>
        <input type='text' placeholder='enter your name' className='m-4 text-center  rounded-xl w-64 h-10 
        focus:outline-none focus:border-red-300 border-4 border-double border-blue-500 pl-1 placeholder-black placeholder-opacity-70'/>
        <div class=" divide-y  divide-light-blue-400 font-mono">
  <div>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  <div>2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  <div>3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
  <div>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
</div>
<table className="border-collapse mt-8 table-auto ml-2  border-2 border-black ...">
      <caption className="caption-bottom">
    Table 3.1: A list of American cities, their states and short comments.
  </caption>
  <thead>
    <tr>
      <th className="border border-gray-900 ...">State</th>
      <th className="border border-gray-900 ...">City</th>
       <th className="border border-gray-900 ...">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-900 ...">Indiana</td>
      <td className="border border-gray-900 ...">Indianapolis</td>
      <td className="border border-gray-900 ...">This is the prophetic city that EGW talked about</td>
    </tr>
    <tr>
      <td className="border border-gray-900 ...">Ohio</td>
      <td className="border border-gray-900 ...">Columbus</td>
      <td className="border border-gray-900 ...">Some people associate it with Christopher Columbus</td>
    </tr>
    <tr>
      <td className="border border-gray-900 ...">Michigan</td>
      <td className="border border-gray-900 ...">Detroit</td>
      <td className="border border-gray-900 ...">Have you heard of the history of cars?</td>
    </tr>
  </tbody>
</table>
<span class="relative flex size-3">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
</span>
<button className='btn hover:ring-2 hover:scale-140'>LOGIN</button>

    </div>
  )
}

export default Body