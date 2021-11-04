import React from 'react';
import { DropdownContainer, DropdownLinker, DropdownWrapper} from './Dropdown2Elements';
import './Dropdown.css';

const Dropdown2 = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
                    <DropdownLinker to='sizes' onClick={toggle}>
                        Size
                    </DropdownLinker>
                    <DropdownLinker to='crust' onClick={toggle}>
                        Crust
                    </DropdownLinker>
                    <DropdownLinker to='sauce' onClick={toggle}>
                        Sauce
                    </DropdownLinker>
                    <DropdownLinker to='toppings' onClick={toggle}>
                        Toppings
                    </DropdownLinker>
                    <DropdownLinker to='beverages' onClick={toggle}>
                        Beverages
                    </DropdownLinker>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown2