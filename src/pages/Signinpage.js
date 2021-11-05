import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';


const Signinpages = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle = {toggle}/> 
            <SignIn />
        </>
    )
}

export default Signinpages
