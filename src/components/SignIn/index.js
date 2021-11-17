import React from 'react';
import { Button } from '../ButtonElements3';
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SigninElements'
import customerinfo from '../Signup/index'

const SignIn = () => {

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for' >Phone Number</FormLabel>
                <FormInput htmlFor='phone_num' required placeholder="Phone Number"/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required placeholder="Password"/>
              <Button>Continue</Button>
              <FormButton2 to='signup'>Sign Up</FormButton2>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default SignIn