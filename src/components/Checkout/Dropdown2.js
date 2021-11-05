import React from 'react';
import { DropdownContainer, DropdownWrapper, DropdownLinker} from './Dropdown2Elements';


const Dropdown2 = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
                    <DropdownLinker to='sizes' 
                        smooth={true} duration={500} spy={true} exact='true' offest={-80}
                        onClick={toggle}>
                        Size
                    </DropdownLinker>
                    <DropdownLinker to='crust' 
                        smooth={true} duration={500} spy={true} exact='true' offest={-80}
                        onClick={toggle}>
                        Crust
                    </DropdownLinker>
                    <DropdownLinker to='sauce' 
                        smooth={true} duration={500} spy={true} exact='true' offest={-80}
                        onClick={toggle}>
                        Sauce
                    </DropdownLinker>
                    <DropdownLinker to='toppings' 
                        smooth={true} duration={500} spy={true} exact='true' offest={-80}
                        onClick={toggle}>
                        Toppings
                    </DropdownLinker>
                    <DropdownLinker to='beverages' 
                        smooth={true} duration={500} spy={true} exact='true' offest={-80}
                        onClick={toggle}>
                        Beverages
                    </DropdownLinker>
            </DropdownWrapper>
        </DropdownContainer>
    )
}
export default Dropdown2