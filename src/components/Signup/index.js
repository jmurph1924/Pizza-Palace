import React, { useState } from 'react';
import Axios from 'axios';
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SignupElements'

const SignUp = () => {

const [phone_num, setPhone_Num] = useState('')
const [c_password, setc_password] = useState('')
const [address, setAddress] = useState('')
const [city, setCity] = useState('')
const [state, setState] = useState('')
const [country, setCountry] = useState('')
const [zipcode, setZipcode] = useState('')
const [name, setName] = useState('')

const submitReview = () => {
Axios.post("http://localhost:3001/api/insert", {customer_name: name, phone_num: phone_num, c_password: c_password, 
ADDRESS: address, CITY: city, STATE: state, COUNTRY: country, ZIPCODE: zipcode}).then(()=> {
  alert("succesful insert")
})
};

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign Up for Great Rewards</FormH1>
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
                <FormInput htmlFor='phonenumber' required onChange={(e) =>{
                  setPhone_Num(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required onChange={(e) =>{
                  setc_password(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='name' required onChange={(e) =>{
                  setName(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>Address</FormLabel>
                <FormInput htmlFor='address' required onChange={(e) =>{
                  setAddress(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>City</FormLabel>
                <FormInput htmlFor='city' required onChange={(e) =>{
                  setCity(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>State</FormLabel>
                <FormInput htmlFor='state' required onChange={(e) =>{
                  setState(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>Country</FormLabel>
                <FormInput htmlFor='country' required onChange={(e) =>{
                  setCountry(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>Zip-Code</FormLabel>
                <FormInput htmlFor='zipcode' required onChange={(e) =>{
                  setZipcode(e.target.value)
                }}/>
              <FormButton2 to="/signin" onClick={submitReview}>Sign Up</FormButton2>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default SignUp