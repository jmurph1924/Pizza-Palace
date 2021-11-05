import React from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from './SignupElements'

const SignUp = () => {
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign Up for Great Rewards</FormH1>
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
                <FormInput htmlFor='phonenumber' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormLabel htmlFor='for'>Re-enter Password</FormLabel>
                <FormInput htmlFor='reenter' required />
              <FormLabel htmlFor='for'>Address</FormLabel>
                <FormInput htmlFor='address' required />
                <FormLabel htmlFor='for'>City</FormLabel>
                <FormInput htmlFor='city' required />
              <FormLabel htmlFor='for'>State</FormLabel>
                <FormInput htmlFor='state' required />
                <FormLabel htmlFor='for'>Zip-Code</FormLabel>
                <FormInput htmlFor='zipcode' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Sign Up</FormButton>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default SignUp