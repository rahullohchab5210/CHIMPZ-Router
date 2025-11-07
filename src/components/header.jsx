import React from 'react'
import { SOCIAL_ICONS } from '../icon'
import { Navlinks } from './navlinks'

function Header(props) {
  return (
       <header className="py-6 bg-[linear-gradient(180deg,#000000_36.19%,rgba(0,0,0,0)_100%)]">
            <div className="navbar-fixed">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="navbar">
                        <div className="flex items-center justify-between w-full ">

                            <div className="flex items-center">
                                <img src={props.img} alt="logo picture"/>
                            </div>
                            <div className="items-center flex w-full max-lg:flex-row-reverse">
                                <input type="checkbox" id="menu-icon" className="peer" hidden/>

                                <label htmlFor="menu-icon" className="justify-between  max-[1024px]:w-[30px] max-[1024px]:h-[25px] max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:justify-between max-[1024px]:cursor-pointer max-[1024px]:z-2 max-[1024px]:relative max-[1024px]:float-right      max-[1024px]:peer-checked:justify-center">
                                    <span className="max-[1024px]:w-full max-[1024px]:h-[5px] max-[1024px]:bg-[#3B945E] max-[1024px]:rounded-xs max-[1024px]:transition-all max-[1024px]:duration-150 max-[1024px]:ease-linear                  max-[1024px]:duration-150ms      max-[1024px]:peer-checked:rotate-40 max-[1024px]:peer-checked:absolute"></span>
                                    <span className="max-[1024px]:w-full max-[1024px]:h-[5px] max-[1024px]:bg-[#3B945E] max-[1024px]:rounded-xs max-[1024px]:transition-all max-[1024px]:duration-150 max-[1024px]:ease-linear                       max-[1024px]:peer-checked:transform-[translateX(-40px)] max-[1024px]:peer-checked:opacity-0"></span>
                                    <span className="max-[1024px]:w-full max-[1024px]:h-[5px] max-[1024px]:bg-[#3B945E] max-[1024px]:rounded-xs max-[1024px]:transition-all max-[1024px]:duration-150 max-[1024px]:ease-linear                     max-[1024px]:peer-checked:-rotate-40 max-[1024px]:peer-checked:absolute"></span>
                                </label>

                           
                                <div className="menu-links flex items-center justify-between w-full gap-2.5 lg:gap-0 max-lg:flex-col max-lg:items-center max-lg:justify-center                             max-[1024px]:peer-checked:right-0 max-[1024px]:peer-checked:flex max-[1024px]:peer-checked:flex-col              max-[1024px]:fixed max-[1024px]:bg-[#00000042] max-[1024px]:backdrop-blur-[10px] max-[1024px]:h-full max-[1024px]:w-full max-[1024px]:top-0 max-[1024px]:-right-full max-[1024px]:justify-center max-[1024px]:transition-all max-[1024px]:duration-150 max-[1024px]:ease-linear max-[1024px]:z-1             ">
                                    <nav className="flex items-center gap-10  justify-center w-full max-lg:flex-col max-lg:items-center max-lg:justify-center">
                                        {Navlinks.map(function (links,i) {
                                          return  <a key={i} href="#" className="text-white/70 font-normal text-[16px]  font-[Fira_Sans,sans-serif] hover:text-white max-lg:hover:bg-blue-500">{links}</a>
                                        })}
                                    </nav>

                                    <div className="flex items-center gap-2">
                                        {SOCIAL_ICONS.map(function (icon,i) {
                                            return <a key={i} href="#" className="w-8 h-8 border-2 border-white border-solid rounded-full flex items-center justify-center group">{icon}</a>
                                        })}  
                                    </div>
                                </div>
                                <button className="w-36 h-[51px] font-normal text-[16px] rounded-[36px] text-white    font-[Dela_Gothic_One,sans-serif] ml-8 px-8 py-3.5 flex items-center justify-center whitespace-nowrap cursor-pointer border-none  bg-[#FFC20A] hover:bg-[#ffc20ad4]">{props.btn}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header


// #navbar-fixed,menulinks,menu-icon