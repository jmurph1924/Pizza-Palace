import React, {useState} from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, 
  FormButton, FormH2} from './LoggedinElements'
import { Button } from '../ButtonElements5';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';

  const types = ["Update Customer Information", "Update Card"];

  function ToggleGroup() {
    const [active, setActive] = useState();
  
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

  
    function checkToggle(type){
      if(type === "Update Customer Information"){
        if (dropdown2 === true) {
          setActive()
          setDropdown2(false);
         } 
         
         else {
           setDropdown2(true);
           setDropdown(false);
         }
      }
      else if(type === "Update Card"){
        if (dropdown === true) {
          setActive()
          setDropdown(false);
          
         }
         else {
           setDropdown(true);
           setDropdown2(false);
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
        {dropdown2 && <Dropdown2 />}
      </>
    );
  }

const Loggedin = () => {
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1> A Great Pizza is On the Way</FormH1>



              <FormH2> Customer Information</FormH2>
              <FormLabel htmlFor='for'>Jonathan Murphree</FormLabel>
              <FormLabel htmlFor='for'>221B Baker Street, Kennesaw, GA, 30041</FormLabel>
              <FormLabel htmlFor='for'>Credit Card: ********1234</FormLabel>
              <FormLabel htmlFor='for'>Date: 01/22 </FormLabel>
              <FormLabel htmlFor='for'> CVC: 123</FormLabel>
              <FormLabel htmlFor='for'></FormLabel>
              <FormLabel htmlFor='for'></FormLabel>
              <FormLabel htmlFor='for'></FormLabel>
              <FormLabel htmlFor='for'></FormLabel>
              <ToggleGroup/>

              <FormButton type='submit'>Submit Changes</FormButton>

            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default Loggedin