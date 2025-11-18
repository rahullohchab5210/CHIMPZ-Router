import React from 'react'

function About() {
  return (
    <div className="max-w-[1140px] mx-auto px-3">
      <div className="flex flex-col flex-wrap -px-3 grow justify-center">
        <div className="w-full px-3 md:w-[58.33%]">
          <h2 className='text-white text-[210px] max-[568px]:text-[100px] font-bold leading-[100%] font-[Exo_2,sans-serif] max-[666px]:text-[150px] max-[360px]:text-[90px] max-[666px]:mt-30'>About</h2>
        </div>
        <div className="w-full px-3  md:w-[41.66%] flex">
          <h2 className='pl-20 text-white text-[210px] max-[568px]:text-[100px] font-bold leading-[100%] font-[Exo_2,sans-serif] max-[666px]:text-[150px] max-[666px]:pl-8 max-[360px]:text-[90px]'>page</h2>
        </div>
      </div>
    </div>
  )
}

export default About 