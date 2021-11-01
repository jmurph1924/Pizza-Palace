import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Pizza Palace</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="buildpizza">Build a Pizza</NavLinks>
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
