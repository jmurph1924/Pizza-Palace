import React, {useState, useCallback} from 'react'
import { Button } from '../ButtonElements6';
import { DropdownContainer, DropdownWrapper, FormInput, FormLabel, FormH2, FormButton2} from './DropdownElements';
import * as Realm from "realm-web";

const types = ["MasterCard", "Visa"];


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

const Dropdown = ({isOpen, toggle}) => {
  const [cardReg, setcardReg] = useState('')
  const [numReg, setnumReg] = useState('') 
  const [dateReg, setdateReg] = useState('')
  const [cvcReg, setCVCReg] = useState('') 
  const [active, setActive] = useState();

function ToggleGroup() {
  
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
      await user.functions.PostCardInfo(cardReg, numReg, dateReg, cvcReg, active);
      
      // once the request is sent, update state again
      setIsSending(false)
    }, [active, cardReg, numReg, dateReg, cvcReg, isSending])

    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
            <FormH2> Credit Cards</FormH2>
            <ToggleGroup/>
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'></FormLabel>
            <FormLabel htmlFor='for'>Name on Card</FormLabel>
                <FormInput htmlFor='cardname' onChange={(e) => {setcardReg(e.target.value)}} placeholder="Name on Card"/>
              <FormLabel htmlFor='for'>Credit Card Number</FormLabel>
                <FormInput htmlFor='creditcardnum' onChange={(e) => {setnumReg(e.target.value)}} placeholder="Card Number"/>
              <FormLabel htmlFor='for'>Date</FormLabel>
                <FormInput htmlFor='date' onChange={(e) => {setdateReg(e.target.value)}} placeholder="Date Month/Year"/>
              <FormLabel htmlFor='for'>CVC</FormLabel>
                <FormInput htmlFor='cvc' onChange={(e) => {setCVCReg(e.target.value)}} placeholder="CVC"/>
                <FormButton2 to="/checkout" onClick = {sendRequest}>Add Card</FormButton2>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown