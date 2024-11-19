import React from 'react'
import Badge from './Badge'
import Image from './Image'
import imgFour from '../assets/Image.png'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from './Flex';
import { SlRefresh } from "react-icons/sl";
import Heading from './Heading';


const Product = () => {
  return (
    <>

      <Badge badgeName={"New"} className={"absolute top-6 left-6"} />
      <Image imgSrc={imgFour} />

      <div className=" bg-white p-5 invisible group-hover:visible absolute bottom-[24px] left-0  w-full ">

        <Flex className={"justify-end items-center gap-x-4"}>
          Add to Wish List <FaHeart />
        </Flex>

        <Flex className={"justify-end items-center gap-x-4"}>
          Compare <SlRefresh />
        </Flex>

        <Flex className={"justify-end items-center gap-x-4"}>
          Add to Cart <FaShoppingCart />
        </Flex>
      </div >

      <Flex className={"justify-between "}>
        <Heading as={"h3"} text={"Basic Crew Neck Tee"} className={""}/> 
        <Heading as={"h3"} text={"$44.00"} className={""}/> 

      </Flex>

    </>
  )
}

export default Product