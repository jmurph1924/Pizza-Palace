import React from 'react';
import { DropdownContainer, DropdownLinker, DropdownWrapper} from './DropdownElements';


const Dropdown = ({isOpen, toggle}) => {
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
                    <DropdownLinker to='adding' 
                        smooth={true} duration={500} spy={true} exact='true' offest={-80}
                        onClick={toggle}>
                        Add to Cart
                    </DropdownLinker>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown