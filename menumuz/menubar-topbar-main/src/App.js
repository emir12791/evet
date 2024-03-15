import React from 'react'
import Topbar from './components/common/topbar'
import Slider from './components/home page/slider'
import Welcome from './components/about-page/welcome'
import Spacer from './components/common/spacer'
import KutuphaneKoleksiyonlari from './components/home page/kütüphane koleksiyonları'
import Menubar from "./components/common/menubar"
import UpcomingEvents from './components/events-page/upcoming-events'
import MobileApp from './components/home page/mobile-app'
import ScrollToTopButton from './components/common/scroll-to-top'


const App = () => {
  return (
    <>
      <Menubar/>
      <Topbar/>
      <Slider/>
      <Spacer/>
      <Welcome/>
      <KutuphaneKoleksiyonlari/>
      <UpcomingEvents/>
      <MobileApp/>
      <ScrollToTopButton/>

      
    </>
  )
}

export default App



