import React from 'react'

function Card1(props) {
  return (
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_85.54%,rgba(255,255,255,0)_100%)] backdrop-blur-[3px]">
                        <span className="text-white leading-[150%] font-medium text-[16px] font-[Roboto,sans-serif] ">{props.text}</span>
                        <h2 className="text-white text-[64px] max-[568px]:text-[50px] font-bold leading-[100%] font-[Exo_2,sans-serif] [text-shadow:1px_1px_4px_rgb(255,255,255)]"><span className="text-[#3B945E] text-[64px] font-bold font-[Exo_2,sans-serif]">{props.chimpz}</span>{props.heading}</h2>
                        <p className="text-white font-normal text-[16px]  font-[Fira_Sans,sans-serif] opacity-90 leading-[150%] mt-4">{props.paragraph}</p>
                    </div>
  )
}

export default Card1