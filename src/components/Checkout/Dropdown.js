import React from 'react';
import { DropdownContainer, DropdownWrapper, FormInput, FormLabel, FormH2} from './DropdownElements';


const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
            <FormH2> Credit Cards</FormH2>
            <FormLabel htmlFor='for'>Name on Card</FormLabel>
                <FormInput htmlFor='cardname' required />
              <FormLabel htmlFor='for'>Credit Card Number</FormLabel>
                <FormInput htmlFor='creditcardnum' required />
              <FormLabel htmlFor='for'>Date</FormLabel>
                <FormInput htmlFor='date' required />
              <FormLabel htmlFor='for'>CVC</FormLabel>
                <FormInput htmlFor='cvc' required/>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown