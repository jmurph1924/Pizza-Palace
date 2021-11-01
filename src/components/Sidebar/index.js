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
                    <SidebarLink to='buildpizza' onClick={toggle}>
                        Build Pizza
                    </SidebarLink>
                    <SidebarLinker to='crust' onClick={toggle}>
                        Crust
                    </SidebarLinker>
                    <SidebarLinker to='cheese' onClick={toggle}>
                        Cheese
                    </SidebarLinker>
                    <SidebarLinker to='sauce' onClick={toggle}>
                        Sauce
                    </SidebarLinker>
                    <SidebarLinker to='toppings' onClick={toggle}>
                        Toppings
                    </SidebarLinker>
                    <SidebarLink to='beverages' onClick={toggle}>
                        Beverages
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
