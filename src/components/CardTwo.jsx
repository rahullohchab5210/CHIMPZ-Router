import React from 'react'

function CardTwo(props) {
  return (
    <div className='overflow-hidden'>
      <img src={props.image} alt="gorilla-picture" className="w-full overflow-hidden   animate-[move_1s_linear_infinite_alternate_both]" />
      
      <style>{`
        @keyframes move {
          0% { transform: translate(0px, 0px); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
      
    </div>
    
  )
}

export default CardTwo