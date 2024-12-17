import React from 'react'

import Container from '../../components/Container'

import Heading from '../../components/Heading'
import Flex from '../../components/Flex'
import Product from '../../components/Product'
import imgFive from '../../assets/Image4.png'
import imgSix from '../../assets/Image5.png'
import imgSeven from '../../assets/Image6.png'
import imgEight from '../../assets/Image7.png'




const Bestseller = () => {



  return (
    <>

      {/* Bestsellers Part Start */}

      <div className="w-full bg-menuColo py-[100px]">
        <Container className={"max-w-headerContainer"} >
          <Heading as="h3" text={"Our Bestsellers"} className={"font-dm text-[39px] font-bold text-hbColor pb-8"} />

          <Flex className={"justify-end items-center gap-x-6"}>


            <Product

              badgeName={'New'}
              imgSrc={imgFive}
              listxtOne={'Add to Wish List'}
              comparetxtTwo={'Compare'}
              carttxtThree={'Add to Cart'}
              basicText={'Basic Crew Neck Tee'}
              priceText={'$44.00'}
              blackTxt={'Black'}

            />


            <Product

              badgeName={'New'}
              imgSrc={imgSix}
              listxtOne={'Add to Wish List'}
              comparetxtTwo={'Compare'}
              carttxtThree={'Add to Cart'}
              basicText={'Basic Crew Neck Tee'}
              priceText={'$44.00'}
              blackTxt={'Black'}

            />



            <Product

              badgeName={'New'}
              imgSrc={imgSeven}
              listxtOne={'Add to Wish List'}
              comparetxtTwo={'Compare'}
              carttxtThree={'Add to Cart'}
              basicText={'Basic Crew Neck Tee'}
              priceText={'$44.00'}
              blackTxt={'Black'}

            />



            <Product

              badgeName={'New'}
              imgSrc={imgEight}
              listxtOne={'Add to Wish List'}
              comparetxtTwo={'Compare'}
              carttxtThree={'Add to Cart'}
              basicText={'Basic Crew Neck Tee'}
              priceText={'$44.00'}
              blackTxt={'Black'}

            />




          </Flex>



        </Container>
      </div>

      {/* Bestsellers Part End */}



    </>
  )
}

export default Bestseller