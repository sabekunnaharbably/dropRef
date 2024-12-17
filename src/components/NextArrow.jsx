import React from 'react'
import { FaRegCircleRight } from "react-icons/fa6";

const NextArrow = (props) => {
    const { className,  onClick } = props;
    return (
      <div
      className={`inline-block text-4xl text-pink-500 absolute top-1/2 right-5  -translate-y-1/2 ${className}`}
      onClick={onClick}
    ><FaRegCircleRight /></div>
    )
}

export default NextArrow