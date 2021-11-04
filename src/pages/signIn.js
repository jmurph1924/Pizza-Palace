import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Signinagain = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

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
};

export default Signinagain