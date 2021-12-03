import React, {useState, useCallback} from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton2} from './SignupElements';
import * as Realm from "realm-web";

export default function SignUp(){

  const [phonenumReg, setPhonenumReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('') 
  const [nameReg, setNameReg] = useState('')
  const [addresReg, setAddressReg] = useState('') 
  const [cityReg, setCityReg] = useState('')
  const [stateReg, setStateReg] = useState('') 
  const [zipcodeReg, setZipcodeReg] = useState('')



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
      await user.functions.postCustomerInformation(nameReg, phonenumReg, passwordReg, addresReg, cityReg, stateReg, zipcodeReg, false);
      
      // once the request is sent, update state again
      setIsSending(false)
    }, [nameReg, phonenumReg, passwordReg, addresReg, cityReg, stateReg, zipcodeReg, isSending])

  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign Up for Great Rewards</FormH1>
              <FormLabel htmlFor='phone_num'>Phone Number</FormLabel>
                <FormInput type="text" onChange={(e) => {setPhonenumReg(e.target.value)}} placeholder="Phone Number"/>
              <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput type="text" onChange={(e) => {setPasswordReg(e.target.value)}} placeholder="Password"/>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput type="text" onChange={(e) => {setNameReg(e.target.value)}} placeholder="Name"/>
              <FormLabel htmlFor='for'>Address</FormLabel>
                <FormInput type="text" onChange={(e) => {setAddressReg(e.target.value)}} placeholder="Address"/>
              <FormLabel htmlFor='for'>City</FormLabel>
                <FormInput type="text" onChange={(e) => {setCityReg(e.target.value)}} placeholder="City"/>
              <FormLabel htmlFor='for'>State</FormLabel>
                <FormInput type="text" onChange={(e) => {setStateReg(e.target.value)}} placeholder="State"/>
              <FormLabel htmlFor='for'>Zip-Code</FormLabel>
                <FormInput type="text" onChange={(e) => {setZipcodeReg(e.target.value)}} placeholder="Zip-Code"/>
              <FormButton2 to="/signin" onClick = {sendRequest}>Sign Up</FormButton2>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}
