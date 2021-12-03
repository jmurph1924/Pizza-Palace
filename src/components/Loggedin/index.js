import React, {useState, useEffect} from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, 
  FormButton, FormH2} from './LoggedinElements'
import { Button } from '../ButtonElements5';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import * as Realm from "realm-web";

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

  function refreshPage() {
    window.location.reload(false);
  }

export default function Loggedin() {

  const [Customers, setCustomers] = useState([]);

  
  useEffect(() => {
    async function fetchdata(){
    const app = new Realm.App({id: "pizzapalace-hyock"});
    const credentials = Realm.Credentials.anonymous();
    try{
      const user = await app.logIn(credentials);
      const allCustomers = await user.functions.GetCustomerInfo();
      setCustomers(() => [allCustomers])
    }catch (error){
      console.error("Failed",error);
    }
  }
  fetchdata();
  }, [])


  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1> A Great Pizza is On the Way</FormH1>
              <FormH2> Customer Information</FormH2>
              {Customers && 
                Customers.map((Customers) => {
                return <FormLabel htmlFor='for' key = {Customers._id}> {refreshPage} {Customers.name}  </FormLabel>
              })}
              {Customers && 
                Customers.map((Customers) => {
                return <FormLabel htmlFor='for' key = {Customers._id}> {Customers.phone_num}  </FormLabel>
              })}
              {Customers && 
                Customers.map((Customers) => {
                return <FormLabel htmlFor='for' key = {Customers._id}> {Customers.address}  </FormLabel>
              })}
              {Customers && 
                Customers.map((Customers) => {
                return <FormLabel htmlFor='for' key = {Customers._id}> {Customers.city}  </FormLabel>
              })}
              {Customers && 
                Customers.map((Customers) => {
                return <FormLabel htmlFor='for' key = {Customers._id}> {Customers.state}  </FormLabel>
              })}
              {Customers && 
                Customers.map((Customers) => {
                return <FormLabel htmlFor='for' key = {Customers._id}> {Customers.zipcode}  </FormLabel>
              })}
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