import React, {useState, useEffect, useCallback} from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormH2, FormH3, FormButton2} from './CheckoutElements2';
import { Button } from '../ButtonElements5';
import Dropdown from './Dropdown';
import * as Realm from "realm-web";



const types = ["Credit Card", "Check", "Cash"];

function Rendering() {
  const [state, setState] = useState("");
  const [togglestate, SettoggleState] = useState(false);
  const [Customers, setCustomers] = useState([]);
  const [phonenumReg, setPhonenumReg] = useState('')
  const [nameReg, setNameReg] = useState('')
  const [addresReg, setAddressReg] = useState('') 
  const [cityReg, setCityReg] = useState('')
  const [stateReg, setStateReg] = useState('') 
  const [zipcodeReg, setZipcodeReg] = useState('')
  const [isSending, setIsSending] = useState(false)
  const typeing = ["Pick-Up", "Delivery"];
  const [active, setActive] = useState();

  function ToggleType() {
    

    return (
      <>
        {typeing.map((type) => (
          <Button active={active === type} onClick={() => {setActive(type)}}>
            {type}
          </Button>  
        ))}
      </>
    );
  }
  const sendRequest1 = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    const app = new Realm.App({id: "pizzapalace-hyock"});
    const credentials = Realm.Credentials.anonymous();
  
    const user = await app.logIn(credentials);
    await user.functions.postCustomerInformation(nameReg, phonenumReg, addresReg, cityReg, stateReg, zipcodeReg);
    
    // once the request is sent, update state again
    setIsSending(false)
  }, [nameReg, phonenumReg, addresReg, cityReg, stateReg, zipcodeReg, isSending])

  const activity = active

  const sendInfo = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    const app = new Realm.App({id: "pizzapalace-hyock"});
    const credentials = Realm.Credentials.anonymous();
  
    const user = await app.logIn(credentials);
    await user.functions.FunctionalOrder(activity);
    
    // once the request is sent, update state again
    setIsSending(false)
  }, [activity, isSending])

  function sendRequest() {
    sendRequest1()
    sendInfo()
  }

  const toggleAccordion = () => {
    if(togglestate === false){
      SettoggleState(true);
      setState(state === "" ? "active" : "");
    }
    else{
      SettoggleState(false);
      setState(state === "" ? "active" : "");
    }
  }

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

  const newArr = Customers.filter((a) => a);

  const length = newArr.length;

    if(togglestate === false){
      return(
        <>
          {toggleAccordion}
          {toggleAccordion}
          <Button onClick={toggleAccordion} className={`${state}`}>
            Customer Information
          </Button> 
          <FormH3></FormH3>
              <ToggleGroup />
              <FormH3></FormH3>
              <ToggleType />
              <FormButton2 to='receipt' onClick = {sendRequest}>Checkout</FormButton2>
              <FormButton2 to='signin'> Login</FormButton2>
        </>
      )
    }
    else{ 
      if(length > 0){
        return(
        <>
           <Button onClick={toggleAccordion} className={`${state}`}>
              Hide Information
           </Button>
           <FormH3></FormH3>
           {Customers && 
                  Customers.map((Customers) => {
                  return <FormLabel htmlFor='for' key = {Customers._id}> {Customers.name}  </FormLabel>
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
                <FormH3></FormH3>
              <ToggleGroup />
              <FormH3></FormH3>
              <ToggleType />
              <FormButton2 to='receipt' onClick = {sendInfo}>Checkout</FormButton2>
              <FormButton2 to='signin'> Login</FormButton2>
          </>
        )
      }
      else{
        return(
          <>
              <Button onClick={toggleAccordion} className={`${state}`}>
                Hide Information
              </Button>
              <FormH3></FormH3>
              <FormLabel htmlFor='phone_num'>Phone Number</FormLabel>
                <FormInput type="text" onChange={(e) => {setPhonenumReg(e.target.value)}} placeholder="Phone Number"/>
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
                <FormH3></FormH3>
              <ToggleGroup />
              <FormH3></FormH3>
              <ToggleType />
              <FormButton2 to='receipt' onClick = {sendRequest}>Checkout</FormButton2>
              <FormButton2 to='signin'> Login</FormButton2>
            </>
          )
      }
    }
  }


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








const Checkout = () => {



  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1> A Great Pizza is On the Way</FormH1>
              <FormH2> Order# 001</FormH2>
              <FormH2> Pizza</FormH2>
              <FormLabel htmlFor='for'>Pizza 1: Large</FormLabel> 
              <FormLabel htmlFor='for'>Crust: Gluten-Free</FormLabel>
              <FormLabel htmlFor='for'>Sauce: BBQ</FormLabel>
              <FormLabel htmlFor='for'>Toppings: Diced Tomatos, Sausage</FormLabel>
              <FormLabel htmlFor='for'>Beverage: Bargs</FormLabel>
              <FormH3></FormH3>
              <FormLabel htmlFor='for'>Pizza 2: Medium</FormLabel> 
              <FormLabel htmlFor='for'>Crust: Regular</FormLabel>
              <FormLabel htmlFor='for'>Sauce: Marinara</FormLabel>
              <FormLabel htmlFor='for'>Toppings: Peppers, Diced Tomatoes, Sausage, Chicken</FormLabel>
              <FormLabel htmlFor='for'>Beverage: Coke</FormLabel>
              <FormH2>Total: $28.75</FormH2>
              <FormH3></FormH3>
              {Rendering()}
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
};

export default Checkout