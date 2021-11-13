import React, { useState } from 'react';
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormH2, FormButton2} from './CheckoutElements2';
import { Button } from '../ButtonElements5';
import Dropdown from './Dropdown';

const Checkout = () => {

  const [dropdown, setDropdown] = useState(false);

  const toggleHome = () => {
    if (dropdown === true) {
      setDropdown(false);
     } else {
       setDropdown(true);
     }
  }
  const toggleOff = () => {
    setDropdown(false)
  }

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1> A Great Pizza is On the Way</FormH1>
              <FormButton2 to='signin'> Login</FormButton2>
              <FormH2> Customer Information</FormH2>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
                <FormInput htmlFor='phonenumber2' required />
              <FormLabel htmlFor='for'>Address</FormLabel>
                <FormInput htmlFor='address' required />
              <FormLabel htmlFor='for'>City</FormLabel>
                <FormInput htmlFor='city' required />
              <FormLabel htmlFor='for'>State</FormLabel>
                <FormInput htmlFor='state' required />
              <FormLabel htmlFor='for'>Zip-Code</FormLabel>
                <FormInput htmlFor='zipcode' required />
                <FormLabel htmlFor='for'>Total:</FormLabel>
              <Button onClick={toggleHome}>Credit Card</Button>
              {dropdown && <Dropdown />}
              <Button onClick={toggleOff}> Check</Button>
              <Button onClick={toggleOff}> Cash</Button>
              <FormButton2 to='checkout3'>Checkout</FormButton2>
              <FormButton2 to='signin'> Login</FormButton2>
              
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
};

export default Checkout