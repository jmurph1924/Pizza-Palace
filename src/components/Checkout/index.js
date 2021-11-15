import React, { useState } from 'react';
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormH2, FormH3, FormButton2} from './CheckoutElements2';
import { Button } from '../ButtonElements5';
import Dropdown from './Dropdown';



const types = ["Credit Card", "Check", "Cash"];

function ToggleGroup() {
  const [active, setActive] = useState();

  const [dropdown, setDropdown] = useState(false);

  function checkToggle(type){
    if(type === "Credit Card"){
      if (dropdown === true) {
        setActive()
        setDropdown(false);
        
       } else {
         setDropdown(true);
       }
    }
    else{
      setDropdown(false)
    }
  }

  function callBoth(type){
    setActive(type)
    checkToggle(type)
  }

  return (
    <>
      {types.map((type) => (
        <Button active={active === type} onClick={() => {callBoth(type)}}>
          {type}
        </Button>  
      ))}
      {dropdown && <Dropdown />}
    </>
  );
}

const typeing = ["Pick-Up", "Delivery"];

function ToggleType() {
  const [active, setActive] = useState();

  return (
    <>
      {typeing.map((type) => (
        <Button active={active === type} onClick={() => {setActive(type)}}>
          {type}
        </Button>  
      ))}
    </>
  );
}



const Checkout = () => {



  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1> A Great Pizza is On the Way</FormH1>
              <FormH2> Order# 001</FormH2>
              <FormH2> Pizzas</FormH2>
              <FormLabel htmlFor='for'>Pizza 1: Large</FormLabel> 
              <FormLabel htmlFor='for'>Crust: Gluten-Free</FormLabel>
              <FormLabel htmlFor='for'>Sauce: BBQ</FormLabel>
              <FormLabel htmlFor='for'>Toppings: Diced Tomatos, Sausage</FormLabel>
              <FormH3></FormH3>
              <FormLabel htmlFor='for'>Pizza 2: Medium</FormLabel> 
              <FormLabel htmlFor='for'>Crust: Regular</FormLabel>
              <FormLabel htmlFor='for'>Sauce: Marinara</FormLabel>
              <FormLabel htmlFor='for'>Toppings: Bacon</FormLabel>
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
              <ToggleGroup />
              <FormH3></FormH3>
              <ToggleType />
              <FormButton2 to='receipt'>Checkout</FormButton2>
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