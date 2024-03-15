import React from 'react'
import Slider from '../components/home page/slider';
import Welcome from '../components/about-page/welcome';
import Spacer from '../components/common/spacer';
import { Navbar } from 'react-bootstrap';


const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Spacer/>
      <Slider/>
      <Spacer/>
      <Welcome/>
      <Spacer/>
      
     
      
    </>
  )
}

export default HomePage