import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/images/monkey-logo.png"
import Button from "./button";
import { SOCIAL_ICONS } from "./icon";

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(null);
    const navlinks = ["home", "about", "buy", "tokenomics", "roadmap"];


    return (
        <header className="py-6 bg-[linear-gradient(180deg,#000000_36.19%,rgba(0,0,0,0)_100%)]">
            <div className="navbar-fixed">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <NavLink to="/">
                                <img src={logoImg} alt="logo" className="cursor-pointer" />
                            </NavLink>
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
                                        {navlinks.map((link, i) => <NavLink onClick={() => setMenuOpen(null)} className={({ isActive }) => `text-white/70 capitalize font-normal text-[16px] font-[Fira_Sans,sans-serif] hover:text-white max-lg:hover:bg-blue-500 px-4 py-2
                                        ${isActive && 'text-white/99'}`} key={i} to={link == 'home' ? '/' : link}>
                                            {link == 'buy' ? 'how to buy' : link}
                                        </NavLink>
                                        )}
                                    </nav>
                                    <div className="flex items-center gap-2">
                                        {SOCIAL_ICONS.map((item, i) => (
                                            <span key={i} href={item.url} onClick={() => { window.open(item.url, "_blank"); setMenuOpen(null); }} className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center group">{item.icon}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Button
                                btn={"Buy Now"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

