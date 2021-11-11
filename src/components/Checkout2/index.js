import React from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, 
  FormButton, FormH2, FormInput2, FormLabel2} from './CheckoutElements2'

const Checkout2 = () => {
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1> A Great Pizza is On the Way</FormH1>



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
              <FormH2> Credit Cards</FormH2>
              <FormLabel htmlFor='for'>Credit Card Number</FormLabel>
                <FormInput htmlFor='creditcardnum' required />
              <FormLabel2 htmlFor='for'>Date</FormLabel2>
                <FormInput2 htmlFor='date' required /> 
              <FormLabel2 htmlFor='for'>CVC</FormLabel2>
                <FormInput2 htmlFor='cvc' required/>

              <FormButton type='submit'>Submit Changes</FormButton>

            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default Checkout2