import React from 'react'

function Card2(props) {
  return (
    <div className='overflow-hidden'>
      <img src={props.image} alt="gorilla-picture" className="w-full overflow-hidden" style={{
        animationName: "move",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
        animationFillMode: "both",
        animationIterationCount: "infinite",
        transformOrigin: "center",
      }} />
      <style>{`
  @keyframes move {
    0% { transform: translate(0px, 0px); }
    100% { transform: translate(30px, 30px); }
  }
`}</style></div>
  )
}



export default Card2