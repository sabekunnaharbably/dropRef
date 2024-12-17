import React from 'react'
import Badge from './Badge'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from './Flex';
import { SlRefresh } from "react-icons/sl";
import Heading from './Heading';
import Image from './Image';


const Product = ({ badgeName,imgSrc,className,listxtOne,comparetxtTwo,carttxtThree,basicText,priceText,blackTxt}) => {

  return (
    <>

      <div className="group">

        <div className="relative">

          <Badge badgeName={badgeName} className={"absolute top-6 left-6"} />
          
          <Image imgSrc={imgSrc} imgAlt={"Images"} className={"pb-4"}/>
          {/* <img src={imgSrc} alt={"Images"} className={` w-full ${className}`} /> */}
          {/* <Image /> */}

          <div className=" bg-white p-5 invisible group-hover:visible absolute bottom-[96px] left-0  w-full ">

            <Flex className={"justify-end items-center gap-x-4"}>
              <Heading as={"h4"} text={listxtOne} className={"font-dm text-[16px]  text-menuColor"} /> <FaHeart />
            </Flex>

            <Flex className={"justify-end items-center gap-x-4"}>
              <Heading as={"h4"} text={comparetxtTwo } className={"font-dm text-[16px]  text-menuColor"} /> <SlRefresh />
            </Flex>

            <Flex className={"justify-end items-center gap-x-4"}>
              <Heading as={"h4"} text={carttxtThree } className={"font-dm text-[16px]  text-menuColor"} /> <FaShoppingCart />
            </Flex>
          </div >

          <Flex className={"justify-between "}>
            <Heading as={"h3"} text={basicText } className={"font-dm text-[16px] text-hbColor"} />
            <Heading as={"h3"} text={priceText } className={"font-dm text-[16px] text-hbColor"} />
          </Flex>
          <div className="py-4">
          <Heading as={"p"} text={blackTxt } className={"font-dm text-[16px] text-menuColor"} />
          </div>


        </div>
      </div>

    </>
  )
}

export default Product