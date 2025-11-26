import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Roadmap() {
  const months = [
    "january", "february", "march", "april", "may", "june",
    "july","august","september","october","november","december"
  ];
  return (
    <div className='max-w-[1140px] mx-auto px-3'>
      <div className='flex flex-col'>
        <h2 className='text-white max-[925px]:text-center text-2xl'>Months:-</h2>
        <ul className='flex gap-3 max-[925px]:flex-col max-[925px]:items-center'>
          {months.map((item, i) => <li key={i} className='border p-1 rounded-sm  text-white capitalize'><Link to={item} >{item}</Link></li>)}
        </ul>
  </div>
     <Outlet/>
    </div>
  )
}

export default Roadmap