import React from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormH2, FormLabel2, FormH3} from './ReceiptElements'

const Receipt = () => {
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1> Receipt</FormH1>
              <FormH2> Order# 001</FormH2>
              <FormH2> Pizza</FormH2>
              <FormLabel htmlFor='for'>Pizza 1: Large</FormLabel> 
              <FormLabel htmlFor='for'>Crust: Gluten-Free</FormLabel>
              <FormLabel htmlFor='for'>Sauce: BBQ</FormLabel>
              <FormLabel htmlFor='for'>Toppings: Diced Tomatos, Sausage</FormLabel>
              <FormH3></FormH3>
              <FormLabel htmlFor='for'>Pizza 2: Medium</FormLabel> 
              <FormLabel htmlFor='for'>Crust: Regular</FormLabel>
              <FormLabel htmlFor='for'>Sauce: Marinara</FormLabel>
              <FormLabel htmlFor='for'>Toppings: Bacon</FormLabel>
              <FormH3></FormH3>
              <FormH1>Delivery Information</FormH1>
              <FormH2> Customer Information</FormH2>
              <FormLabel htmlFor='for'>Name: Todd Jones</FormLabel> 
              <FormLabel htmlFor='for'>Phone Number: 678-867-5309</FormLabel>
              <FormLabel htmlFor='for'>Address: 221B Baker Street, Norfolk, Virginia</FormLabel>
              <FormH2> Credit Cards</FormH2>
              <FormLabel htmlFor='for'>Credit Card Number: 123412345678</FormLabel>
              <FormLabel2 htmlFor='for'>Date: 01/22</FormLabel2>
              <FormLabel2 htmlFor='for'>CVC: 123</FormLabel2>
              <FormH2> Total: $13.75</FormH2>
              
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default Receipt