import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { homeObjOne } from '../components/Sizes/Data';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/Sizes';
import CrustSection from '../components/Crust';
import { crustObjOne } from '../components/Crust/Data';
import SauceSection from '../components/Sauce';
import { sauceObjOne } from '../components/Sauce/Data';
import ToppingsSection from '../components/Toppings';
import { toppingsObjOne } from '../components/Toppings/Data';
import BeveragesSection from '../components/Beverages';
import { beveragesObjOne } from '../components/Beverages/Data';


const Home = () => {
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

export default Home
