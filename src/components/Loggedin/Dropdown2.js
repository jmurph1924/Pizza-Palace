import React from 'react'
import { DropdownContainer, DropdownWrapper, FormInput, FormLabel, FormH2} from './DropdownElements';

const Dropdown2 = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
            <FormH2> Personal Information</FormH2>
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='cardname' />
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
                <FormInput htmlFor='creditcardnum' />
              <FormLabel htmlFor='for'>Address</FormLabel>
                <FormInput htmlFor='date' />
              <FormLabel htmlFor='for'>City</FormLabel>
                <FormInput htmlFor='cvc' />
                <FormLabel htmlFor='for'>State</FormLabel>
                <FormInput htmlFor='creditcardnum' />
              <FormLabel htmlFor='for'>Zipcode</FormLabel>
                <FormInput htmlFor='date' />
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown2