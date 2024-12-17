import React from 'react'

import Container from '../../components/Container'

 import Flex from '../../components/Flex'
 import { FaTruck, FaUndo } from "react-icons/fa";
 import Heading from '../../components/Heading'

import { PiNumberTwoBold } from "react-icons/pi";


const Information = () => {
    return (
        <>
            {/* Information Part Start */}

            <div className="w-full py-[30px]">
                <Container className={"max-w-headerContainer"}>
                    <Flex className={"justify-between "}>

                        <div className="w-[30%]">
                            <Flex className={"gap-x-4"}>
                                <PiNumberTwoBold />
                                <Heading as="h3" text={"Two years warranty"} className={"font-dm text-sm text-hbColor capitalize"} />
                            </Flex>
                        </div>

                        <div className="w-[30%]">
                            <Flex className={"gap-x-4"}>
                                <FaTruck />
                                <Heading as="h3" text={"Free shipping"} className={"font-dm text-sm text-hbColor capitalize"} />
                            </Flex>
                        </div>

                        <div className="w-[30%]">
                            <Flex className={"gap-x-4"}>
                                <FaUndo />
                                <Heading as="h3" text={"Return policy in 30 days"} className={"font-dm text-sm text-hbColor capitalize"} />
                            </Flex>
                        </div>

                    </Flex>
                </Container>
            </div>

            {/* Information Part End */}



        </>
    )
}

export default Information