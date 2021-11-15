import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Loggedin from '../components/Loggedin';



const Loggedinpage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen = {isOpen} toggle={toggle}/>
          <Navbar toggle = {toggle}/>  
          <Loggedin />
        </>
    )
}

export default Loggedinpage