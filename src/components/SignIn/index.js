import React, {useState, useCallback} from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SigninElements'
import * as Realm from "realm-web";

const SignIn = () => {

  const [phonenumReg, setPhonenumReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('') 

  const [isSending, setIsSending] = useState(false)

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    const app = new Realm.App({id: "pizzapalace-hyock"});
    const credentials = Realm.Credentials.anonymous();

    const user = await app.logIn(credentials);
    await user.functions.SetLogin(phonenumReg, passwordReg);
    
    // once the request is sent, update state again
    setIsSending(false)
  }, [phonenumReg, passwordReg, isSending])

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='phone_num'>Phone Number</FormLabel>
                <FormInput type="text" onChange={(e) => {setPhonenumReg(e.target.value)}} placeholder="Phone Number"/>
              <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput type="text" onChange={(e) => {setPasswordReg(e.target.value)}} placeholder="Password"/>
              <FormButton2 to='loggedin' onClick = {sendRequest}>Continue</FormButton2>
              <FormButton2 to='signup' >Sign Up</FormButton2>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default SignIn