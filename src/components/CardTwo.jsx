import React from 'react'

function CardTwo(props) {
  return (
    <div className='overflow-hidden'>
      <img src={props.image} alt="gorilla-picture" className="w-full overflow-hidden   animate-[move_1s_linear_infinite_alternate_both]"  />
     </div>
  )
}

export default CardTwo