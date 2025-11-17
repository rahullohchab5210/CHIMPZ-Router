import React from 'react'
import Card1 from "./Card1.jsx";
import Card2 from "./Card2.jsx";


function Section(props) {
    return (

        <div className="max-w-[1140px] mx-auto px-3">
            <div className="flex flex-row flex-wrap -px-3 grow items-center justify-center">
                <div className="w-full px-3 md:w-[58.33%]">
                    <Card1
                        text={"APE TOGETHER STRONG"}
                        chimpz={"CHIMPZ"}
                        heading={" A Green Revolution for Your Wallet"}
                        paragraph={"Dedicated to all the chimps around the world, we have created a safe haven for all the risk-takers and degenerates who have their helmets ready for the next moon landing."}
                    />
                </div>
                <div className="w-full px-3  md:w-[41.66%] flex">
                    <Card2
                        image={"./assets/images/hero-placeholder.png"}
                     />
                </div>
            </div>
        </div>


    )
}

export default Section