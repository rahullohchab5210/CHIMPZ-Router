import React from 'react'
import CardOne from './CardOne'
import HeroImg from '../assets/images/hero-placeholder.png'
function Section() {
    return (
        <div className='flex grow items-center justify-center'>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-row flex-wrap -mx-3 items-center ">
                    <div className="w-full px-3 md:w-[58.33%]">
                        <CardOne
                            text={"APE TOGETHER STRONG"}
                            chimpz={"CHIMPZ"}
                            heading={" A Green Revolution for Your Wallet"}
                            paragraph={"Dedicated to all the chimps around the world, we have created a safe haven for all the risk-takers and degenerates who have their helmets ready for the next moon landing."}
                        />
                    </div>
                    <div className="w-full px-3  md:w-[41.66%] flex">
                        <div className='overflow-hidden'>
                            <img src={HeroImg} alt="gorilla-picture" className="w-full overflow-hidden   animate-[move_1s_linear_infinite_alternate_both]" />

                            <style>{`
        @keyframes move {
          0% { transform: translate(0px, 0px); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section