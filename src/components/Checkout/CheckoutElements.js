import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const SigninContainer = styled.div`
  color: white;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'white')};

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const SigninWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%auto;
  max-width: 4000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background-color: #010101;
  max-width: 400px;
  margin-top: 94px;
  margin-left: -100px;
  height: auto;
  width: 1000%;
  z-index: 1;
  display: grid;
  padding: 80px 32px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
export const FormH2 = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  text-decoration: underline;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const FormLabel2 = styled.div`
  display: inline flex;
  justify-content: flex-start;
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`
export const FormInput2 = styled.input`
  display: grid;
  justify-content: flex-start;
  padding: 16px 16px;
  width: 80px;
  margin-bottom: 32px;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #C01717;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`

export const FormButton2 = styled(LinkR)`
  background: #C01717;
  display: flex;
  text-decoration: none;
  justify-content: center;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
    margin-top: 20px;
`

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkR)`
    color: white;
    display: grid;
    align-items: center;
    margin-left: -110px;
    text-decoration: none;
    padding: 0 1rem;
    font-size: 20px;
    height: 100%;
    cursor: pointer;
    &.active{
        color: white;
    }
`;