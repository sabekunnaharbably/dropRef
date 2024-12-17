import React from 'react'
import Container from '../../components/Container'
import Product from '../../components/Product'
import Heading from '../../components/Heading'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../../components/prevArrow'
import NextArrow from '../../components/NextArrow'
import imgOne from '../../assets/Image.png'
import imgTwo from '../../assets/Image1.png'
import imgThree from '../../assets/Image2.png'
import imgFour from '../../assets/Image3.png'


const ProductMain = () => {

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
            <div className="py-4">
                <Container >
                    <div className="">
                        <Heading as="h3" text={"New Arrivals"} className={"font-dm text-[39px] font-bold text-hbColor pb-8"} />
                    </div>

                    <Slider {...settings}>

                        <Product

                            badgeName={'New'}
                            imgSrc={imgOne}
                            listxtOne={'Add to Wish List'}
                            comparetxtTwo={'Compare'}
                            carttxtThree={'Add to Cart'}
                            basicText={'Basic Crew Neck Tee'}
                            priceText={'$44.00'}
                            blackTxt={'Black'}
                        />

                        <Product

                            badgeName={'New'}
                            imgSrc={imgTwo}
                            listxtOne={'Add to Wish List'}
                            comparetxtTwo={'Compare'}
                            carttxtThree={'Add to Cart'}
                            basicText={'Basic Crew Neck Tee'}
                            priceText={'$44.00'}
                            blackTxt={'Black'}
                        />


                        <Product

                            badgeName={'New'}
                            imgSrc={imgThree}
                            listxtOne={'Add to Wish List'}
                            comparetxtTwo={'Compare'}
                            carttxtThree={'Add to Cart'}
                            basicText={'Basic Crew Neck Tee'}
                            priceText={'$44.00'}
                            blackTxt={'Black'}
                        />


                        <Product

                            badgeName={'New'}
                            imgSrc={imgFour}
                            listxtOne={'Add to Wish List'}
                            comparetxtTwo={'Compare'}
                            carttxtThree={'Add to Cart'}
                            basicText={'Basic Crew Neck Tee'}
                            priceText={'$44.00'}
                            blackTxt={'Black'}
                        />



                    </Slider>


                </Container>

            </div>



        </>
    )
}

export default ProductMain