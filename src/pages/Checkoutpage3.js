import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Checkout3 from '../components/Checkout3';



const Checkoutpage3 = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen = {isOpen} toggle={toggle}/>
          <Navbar toggle = {toggle}/>  
          <Checkout3 />
        </>
    )
}

export default Checkoutpage3