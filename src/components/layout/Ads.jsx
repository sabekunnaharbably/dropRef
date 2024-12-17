import React from 'react'

import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../Image'
import imgOne from '../../assets/Ad1.png'
import imgTwo from '../../assets/Ad2.png'
import imgThree from '../../assets/Ad3.png'



const Ads = () => {

    return (
        <>
            {/* Ads Part Start */}

            <div className="pt-[140px] pb-[70px]">
                <Container className={"max-w-headerContainer"} >
                    <Flex className={"justify-between"}>
                        <div className="w-[49%]">
                        <Image imgSrc={imgOne} />
                        </div>

                        <div className="w-[49%]">
                             <Image imgSrc={imgTwo} className={"pb-8"} /> 
                             <Image imgSrc={imgThree} /> 
                        </div>
                    </Flex>

                </Container>
            </div>

            {/* Ads Part End ---------
                 ---------------- */}


        </>
    )
}

export default Ads