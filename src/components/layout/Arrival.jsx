import React from 'react'

import Container from '../../components/Container'

import Heading from '../../components/Heading'

 import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
 import PrevArrow from '../../components/prevArrow'
import NextArrow from '../../components/NextArrow'
import Product from '../Product';




const Arrival = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
   
      }
     


  return (
    <>
      {/* Arrivals Part Start */}
 
      <div className="w-full bg-menuColo py-[100px]">

        <Container className={"max-w-headerContainer"} >
            
          <Heading as="h3" text={"New Arrivals"} className={"font-dm text-[39px] font-bold text-hbColor pb-8"} />
         
          <Slider {...settings}>

            <div className={"relative group px-4"}>
              <Product/>

            </div>

            <div className={"relative group px-4"}>
              <Product />

            </div>

            <div className={"relative group px-4"}>
              <Product />

            </div>

            <div className={"relative group px-4"}>
              <Product />

            </div>

            <div className={"relative group px-4"}>
              <Products />

            </div>

          </Slider>

        </Container>

      </div> 

      {/* Arrivals Part End */}

    </>
  )
}

export default Arrival