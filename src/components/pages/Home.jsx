import React from 'react'

import Navber from '../layout/Navber'
import Banner from '../layout/Banner'
import Information from '../layout/Information'
import Ads from '../layout/Ads'
import Bestseller from '../layout/Bestseller'
import ProductMain from '../layout/ProductMain'
import Phone from '../layout/Phone'
import Special from '../layout/Special'
import Fotter from '../layout/Fotter'


const Home = () => {
    return (
        <>
            <Navber />
            <Banner />
            <Information />
            <Ads />
            <ProductMain />
            <Bestseller />
            <Phone/>
           <Special/>
           <Fotter/>


        </>
    )
}

export default Home