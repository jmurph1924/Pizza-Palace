import React from 'react';
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SignupElements'
import { useHistory } from 'react-router-dom';

const SignUp = () => {

const history = useHistory();
let customerinfo = [];
const addCustomer = (ev)=>{
  ev.preventDefault();
  let customer = {
  count: customerinfo.length++,
  name: document.getElementById('name').value,
  phone_num: document.getElementById('phone_num').value,
  password: document.getElementById('password').value,
  online: false,
  addresses: document.getElementById('addresses').value,
  city: document.getElementById('city').value,
  state: document.getElementById('state').value,
  country: document.getElementById('country').value,
  zipcode: document.getElementById('zipcode').value,
  }
  customerinfo.push(customer);
  history.push("/signin");
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
