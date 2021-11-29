import React from 'react';
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SigninElements'
import customerinfo from '../Signup/index'
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const customer = customerinfo[0]
  const history = useHistory();
  const signingin = (ev) => {

          history.push("/loggedin");
  }

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for' >Phone Number</FormLabel>
                <FormInput type="text" id="phone_num" placeholder="Phone Number"/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type="text" id="password" placeholder="Password"/>
              <FormLabel htmlFor='for' > {customer}</FormLabel>
              <FormButton2 to='loggedin' onClick={signingin}>Continue</FormButton2>
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