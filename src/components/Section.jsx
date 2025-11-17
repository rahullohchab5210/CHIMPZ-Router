import React from 'react'

import CardOne from './CardOne'
import CardTwo from './CardTwo'

function Section() {
    return (

        <div className="max-w-[1140px] mx-auto px-3">
            <div className="flex flex-row flex-wrap -px-3 grow items-center justify-center">
                <div className="w-full px-3 md:w-[58.33%]">
                    <CardOne
                        text={"APE TOGETHER STRONG"}
                        chimpz={"CHIMPZ"}
                        heading={" A Green Revolution for Your Wallet"}
                        paragraph={"Dedicated to all the chimps around the world, we have created a safe haven for all the risk-takers and degenerates who have their helmets ready for the next moon landing."}
                    />
                </div>
                <div className="w-full px-3  md:w-[41.66%] flex">
                    <CardTwo
                        image={"./assets/images/hero-placeholder.png"}
                    />
                </div>
            </div>
        </div>


    )
}

export default Section