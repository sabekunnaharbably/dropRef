
// import { useRef } from 'react'
import './App.css'
// import Container from './components/Container'
// import Flex from './components/Flex'
// import Image from './components/Image'
// import logoo from '../src/assets/Logo.png'
// import Menu from './components/Menu'
// import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaTruck, FaUndo, FaEquals } from "react-icons/fa";
// import Heading from './components/Heading'
// import { PiNumberTwoBold } from "react-icons/pi";
// import imgOne from '../src/assets/Ad1.png'
// import imgTwo from '../src/assets/Ad2.png'
// import imgThree from '../src/assets/Ad3.png'
// import Products from './components/Product'
// import "slick-carousel/slick/slick.css";
// import Slider from "react-slick";
// import PrevArrow from './components/prevArrow'
// import NextArrow from './components/NextArrow'


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Product from './components/Product';

const router = createBrowserRouter(

  createRoutesFromElements(

      <Route path="/"
        element={<Product/>} >
  
    </Route>
  )

);





function App() {


  // var settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />

  // };


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
