import React from 'react';
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SignupElements'

const SignUp = () => {

let customerinfo = [];
let addressinfo = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
const addCustomer = (ev)=>{
  ev.preventDefault();  //to stop the form submitting
  let customer = {
  count: customerinfo.length++,
  name: document.getElementById('name').value,
  phone_num: document.getElementById('phone_num').value,
  password: document.getElementById('password').value,
  online: false
  }
  let address = {
  count: customerinfo.length++,
  addresses: document.getElementById('addresses').value,
  city: document.getElementById('city').value,
  state: document.getElementById('state').value,
  country: document.getElementById('country').value,
  zipcode: document.getElementById('zipcode').value,
  }
  customerinfo.push(customer);
  addressinfo.push(address);
  document.forms[0].reset(); // to clear the form for the next entries
  //document.querySelector('form').reset();
}

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign Up for Great Rewards</FormH1>
              <FormLabel htmlFor='phone_num'>Phone Number</FormLabel>
                <FormInput type="text" id="phone_num" placeholder="Phone Number"/>
              <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput type="text" id="password" placeholder="Password"/>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput type="text" id="name" placeholder="Name"/>
              <FormLabel htmlFor='for'>Address</FormLabel>
                <FormInput type="text" id="addresses" placeholder="Address"/>
              <FormLabel htmlFor='for'>City</FormLabel>
                <FormInput type="text" id="city" placeholder="City"/>
              <FormLabel htmlFor='for'>State</FormLabel>
                <FormInput type="text" id="state" placeholder="State"/>
              <FormLabel htmlFor='for'>Country</FormLabel>
                <FormInput type="text" id="country" placeholder="Country"/>
              <FormLabel htmlFor='for'>Zip-Code</FormLabel>
                <FormInput type="text" id="zipcode" placeholder="Zip-Code"/>
              <FormButton2 to="/signin" onClick={addCustomer}>Sign Up</FormButton2>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default SignUp