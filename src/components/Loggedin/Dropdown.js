import React from 'react'
import Select from 'react-select';
import { DropdownContainer, DropdownWrapper, FormInput, FormLabel, FormH2} from './DropdownElements';

const options = [
  { value: 'MasterCard', label: 'MasterCard' },
  { value: 'Visa', label: 'Visa' },
]



const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
            <FormH2> Credit Cards</FormH2>
            <Select 
              options={options}
              getOptionLabel={(options) => options['label']}
              getOptionValue={(options) => options['value']}
              
            />
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'></FormLabel>
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