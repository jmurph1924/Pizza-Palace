import React, { useState } from 'react';
import Axios from 'axios';
import { Button } from '../ButtonElements3';
import { useHistory } from "react-router-dom";
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SigninElements'

const SignIn = () => {

  const [phone_num, setPhone_Num] = useState('')
  const [c_password, setc_password] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const login = () => {
    Axios.post("http://localhost:3001/login", {phone_num: phone_num, c_password: c_password}).then((response)=> {
      
    if (response.data.message){
        setLoginStatus(response.data.message)
    } else{
      setLoginStatus(routeChange)
    }
    })
  };

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `checkout2`; 
    history.push(path);
  }

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
                <FormInput htmlFor='phone_num' required onChange={(e) =>{
                  setPhone_Num(e.target.value)
                }}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required onChange={(e) =>{
                  setc_password(e.target.value)
                }}/>
              <Button onClick={login}>Continue</Button>
              <FormButton2 to='signup'>Sign Up</FormButton2>
              <FormLabel htmlFor= 'for'>{loginStatus}</FormLabel>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default SignIn