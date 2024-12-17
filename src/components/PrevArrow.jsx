import React from 'react'
import { FaRegCircleLeft } from "react-icons/fa6";

const PrevArrow = (props) => {

    const { className,  onClick } = props;
  return (
    <div
    className={`inline-block text-4xl text-pink-500 absolute top-1/2 left-5 z-10 -translate-y-1/2 ${className}`}
    onClick={onClick}
  ><FaRegCircleLeft /></div>
  )
}

export default PrevArrow