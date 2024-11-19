import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {

    const { className,  onClick } = props;
  return (
    <div
    className={`inline-block text-4xl text-violet-300 absolute top-1/2 left-5 z-10 -translate-y-1/2 ${className}`}
    onClick={onClick}
  ><FaArrowAltCircleLeft /></div>
  )
}

export default PrevArrow