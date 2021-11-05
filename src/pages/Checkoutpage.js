import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { homeObjOne } from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import CrustSection from '../components/Crust';
import { crustObjOne } from '../components/Crust/Data';
import SauceSection from '../components/Sauce';
import { sauceObjOne } from '../components/Sauce/Data';
import ToppingsSection from '../components/Toppings';
import { toppingsObjOne } from '../components/Toppings/Data';
import BeveragesSection from '../components/Frontpage/Beverages';
import { beveragesObjOne } from '../components/Frontpage/Beverages/Data';


const Checkoutpage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen = {isOpen} toggle={toggle}/>
          <Navbar toggle = {toggle}/>  
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <CrustSection {...crustObjOne}/>
          <SauceSection {...sauceObjOne}/>
          <ToppingsSection {...toppingsObjOne}/>
          <BeveragesSection {...beveragesObjOne} />
        </>
    )
}

export default Checkoutpage