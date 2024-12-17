import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Heading from '../../components/Heading'
import Image from '../../components/Image'
import imgThirteen from '../../assets/Logo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Fotter = () => {

    return (

        <>
            <div className="py-12 bg-shopColor">

                <Container>

                    <Flex className={"justify-between gap-x-6"}>

                        <div className="w-[10%]">
                            <Heading as='h3' text={"MENU"} className={"font-dm text-4 font-bold text-fotterMenuColor pb-8"} />
                            <Heading as='p' text={"Home"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Shop"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"About"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Contact"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Journal"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                        </div>

                        <div className="w-[10%]">
                            <Heading as='h3' text={" SHOP"} className={"font-dm text-4 font-bold text-fotterMenuColor pb-8"} />
                            <Heading as='p' text={"Category 1"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Category 2"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Category 3"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Category 4"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Category 5"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                        </div>

                        <div className="w-[20%]">
                            <Heading as='h3' text={"HELP"} className={"font-dm text-4 font-bold text-fotterMenuColor pb-8"} />
                            <Heading as='p' text={"Privacy Policy"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Terms & Conditions"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Special E-shop"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Shipping"} className={"font-dm text-sm  text-fotterColor pb-4"} />
                            <Heading as='p' text={"Secure Payments"} className={"font-dm text-4  text-fotterColor pb-4"} />
                        </div>

                        <div className="w-[20%]">
                            <Heading as='h3' text={" (052) 611-5711"} className={"font-dm text-4 font-bold text-fotterMenuColor pb-4"} />
                            <Heading as='h2' text={"company@domain.com"} className={"font-dm text-sm text-fotterMenuColor pb-2"} />
                            <Heading as='p' text={"575 Crescent Ave. Quakertown, PA 18951"} className={"font-dm text-sm text-fotterColor pb-4"} />
                        </div>

                        <div className="w-[30%]">
                            <Image imgSrc={imgThirteen} />
                        </div>

                    </Flex>

                    <div className="py-14">
                        <Flex className={"justify-between"}>

                            <div className="w-2/3">
                                <Flex className={"justify-start gap-x-6"}>
                                    <FaFacebookF />
                                    <FaLinkedinIn />
                                    <FaInstagram />
                                </Flex>
                            </div>

                            <div className="w-1/3">

                                <Heading as='p' text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"} className={"font-dm text-[14px] text-fotterColor pb-4"} />

                            </div>
                        </Flex>
                    </div>

                </Container>

            </div>

        </>

    )
}

export default Fotter