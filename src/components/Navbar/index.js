import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import Dropdown from './Dropdown';

const Navbar = ({toggle}) => {

    const [dropdown, setDropdown] = useState(false);


     const onMouseEnter = () => {
      if (window.innerWidth < 960) {
       setDropdown(false);
      } else {
        setDropdown(true);
      }
     };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to= "home">Pizza Palace</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem            
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  >
                    <NavLinks to="buildpizza">Build a Pizza</NavLinks>
                    {dropdown && <Dropdown />}
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/signin">Login</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>  
    );
};

export default Navbar