import React, { useState } from "react";
import { SOCIAL_ICONS } from "../icon";
import { Navlinks } from "./navlinks";

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(null);

    return (
        <header className="py-6 bg-[linear-gradient(180deg,#000000_36.19%,rgba(0,0,0,0)_100%)]">
            <div className="navbar-fixed">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <img src={props.img} alt="logo" />
                        </div>

                        <div className="flex items-center max-[1024px]:flex-row-reverse min-[1024px]:justify-between min-[1024px]:w-full">
                            <div className="justify-between w-full">
                                <button onClick={() => setMenuOpen(menuOpen === "show" ? null : "show")} className="flex flex-col justify-between h-[22px] w-7 bg-transparent border-0 ml-auto z-5 relative lg:hidden" >
                                    <span
                                        className={`block w-full h-[3px] bg-[#3B945E] rounded-sm transition-all duration-300 ease-in-out transform ${menuOpen === "show" ? "rotate-45 origin-left" : "rotate-0 "}`}
                                    ></span>
                                    <span
                                        className={`block w-full h-[3px] bg-[#3B945E] rounded-sm transition-all duration-300 ease-in-out     ${menuOpen === "show" ? "opacity-0 -translate-x-10" : ""}`}
                                    ></span>
                                    <span
                                        className={`block w-full h-[3px] bg-[#3B945E] rounded-sm transition-all duration-300 ease-in-out transform    ${menuOpen === "show" ? "-rotate-45 origin-left" : "rotate-0 "}`}
                                    ></span>
                                </button>

                                <div className={`menu-links flex items-center justify-between w-full gap-2.5 lg:gap-0 max-lg:flex-col max-lg:items-center max-lg:justify-center max-[1024px]:fixed max-[1024px]:bg-[#00000080] max-[1024px]:backdrop-blur-[10px] max-[1024px]:h-full max-[1024px]:w-full max-[1024px]:top-0 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-linear z-1 ${menuOpen === "show" ? "max-[1024px]:right-0" : "max-[1024px]:-right-full"}`} >
                                    <nav className="flex items-center gap-10 justify-center w-full max-lg:flex-col max-lg:items-center">
                                        {Navlinks.map((link, i) => (
                                            <a key={i} href="#" className="text-white/70 font-normal text-[16px] font-[Fira_Sans,sans-serif] hover:text-white max-lg:hover:bg-blue-500 px-4 py-2">{link}</a>
                                        ))}
                                    </nav>
                                    <div className="flex items-center gap-2">
                                        {SOCIAL_ICONS.map((icon, i) => (
                                            <a key={i} href="#" className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">{icon}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className="w-36 h-[51px] font-normal text-[16px] rounded-[36px] text-white font-[Dela_Gothic_One,sans-serif] ml-8 px-8 py-3.5 flex items-center justify-center whitespace-nowrap cursor-pointer border-0 bg-[#FFC20A] hover:bg-[#ffc20ad4]">
                                {props.btn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
