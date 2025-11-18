import React from 'react'

function Button(props) {
  return (
    <button className="w-36 h-[51px] font-normal text-[16px] rounded-[36px] text-white font-[Dela_Gothic_One,sans-serif] ml-8 px-8 py-3.5 flex items-center justify-center whitespace-nowrap cursor-pointer border-0 bg-[#FFC20A] hover:bg-[#ffc20ad4]">
      {props.btn}
    </button>
  )
}

export default Button