import React from 'react'
import Card from '../components/Card'
import Card1 from '../components/Card1'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { FaHeadphonesAlt } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbPhoneCall } from "react-icons/tb";
import Doctors from '../components/Doctors'

const Home = () => {
  return (
    <>
      <Carousel />
      <Doctors/>
      </>
  )
}

export default Home