import React from 'react'

import Container from '../../components/Container'

import Heading from '../../components/Heading'
import Flex from '../../components/Flex'
import Product from '../../components/Product'
import imgNine from '../../assets/Image8.png'
import imgTen from '../../assets/Image9.png'
import imgEleven from '../../assets/Image10.png'
import imgTwelve from '../../assets/Image12.png'



const Special = () => {

  return (

    <>

       {/* Special Part Start */}

       <div className="w-full bg-menuColo py-[100px]">
        <Container className={"max-w-headerContainer"} >
          <Heading as="h3" text={"Special Offers"} className={"font-dm text-[39px] font-bold text-hbColor pb-8"} />

          <Flex className={"justify-end items-center gap-x-6"}>


            <Product

              badgeName={'New'}
              imgSrc={imgNine}
              listxtOne={'Add to Wish List'}
              comparetxtTwo={'Compare'}
              carttxtThree={'Add to Cart'}
              basicText={'Basic Crew Neck Tee'}
              priceText={'$44.00'}
              blackTxt={'Black'}

            />


            <Product

              badgeName={'New'}
              imgSrc={imgTen}
              listxtOne={'Add to Wish List'}
              comparetxtTwo={'Compare'}
              carttxtThree={'Add to Cart'}
              basicText={'Basic Crew Neck Tee'}
              priceText={'$44.00'}
              blackTxt={'Black'}

            />



            <Product

              badgeName={'New'}
              imgSrc={imgEleven}
              listxtOne={'Add to Wish List'}
              comparetxtTwo={'Compare'}
              carttxtThree={'Add to Cart'}
              basicText={'Basic Crew Neck Tee'}
              priceText={'$44.00'}
              blackTxt={'Black'}

            />



            <Product

              badgeName={'New'}
              imgSrc={imgTwelve}
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

      {/* Special Part End */}


    </>
  )
}

export default Special