import React from 'react'
import Container from '../../components/Container'
 import Flex from '../../components/Flex'
  import Image from '../../components/Image'
 import logoo from '../../assets/Logo.png'
 import Menu from '../../components/Menu'
 import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaEquals } from "react-icons/fa";
  import Heading from '../../components/Heading'

const Navber = () => {
    return (
        <>
            {/* Header Part Start */}
            <div className="w-full">
                <Container className={"max-w-headerContainer"}>
                    <Flex>
                        <div className="w-logoW mt-8">
                            <Image imgSrc={logoo} />
                        </div>
                        <div className="w-menuW py-8">
                            <Flex className={"justify-center text-white"}>
                                <Menu menuName={"Home"} />
                                <Menu menuName={"Shop"} />
                                <Menu menuName={"About"} />
                                <Menu menuName={"Contact"} />
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Header Part End */}

            {/* Category Part Start */}

            <div className=" w-full bg-shopColor py-6 border border-menuColor">
                <Container className={"max-w-headerContainer"} >
                    <Flex className={"items-center"} >
                        <div className="w-1/5">
                            <Flex className={"gap-x-4"}>
                                <FaEquals />
                                <Heading as="h3" text={"Shop by Category"} className={"font-dm text-sm text-hbColor"} />
                            </Flex>
                        </div>
                        <div className={"w-3/5 relative"}>
                            <input type="text" className={"p-4 bg-white rounded-lg w-full"} placeholder="Search Products" />
                            <FaSearch className={"absolute top-1/2 right-5 -translate-y-1/2"} />
                        </div>
                        <div className="w-1/5">
                            <Flex className={"justify-end"}>
                                <FaUser className={"ml-4"} />
                                <FaCaretDown className={"mr-8"} />
                                <FaShoppingCart />
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>

            {/* Category Part End */}
        </>
    )
}

export default Navber