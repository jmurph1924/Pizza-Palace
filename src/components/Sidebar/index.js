import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinker} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>
                        Build Pizza
                    </SidebarLink>
                    <SidebarLinker to='sizes' onClick={toggle}>
                        Size
                    </SidebarLinker>
                    <SidebarLinker to='crust' onClick={toggle}>
                        Crust
                    </SidebarLinker>
                    <SidebarLinker to='sauce' onClick={toggle}>
                        Sauce
                    </SidebarLinker>
                    <SidebarLinker to='toppings' onClick={toggle}>
                        Toppings
                    </SidebarLinker>
                    <SidebarLinker to='beverages' onClick={toggle}>
                        Beverages
                    </SidebarLinker>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
