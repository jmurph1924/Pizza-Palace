import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const DropdownContainer = styled.aside`
    background: rgba(0,0,0);
    margin-left: 400px;
    margin-top: 750px;
    width: 300px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: center;
`;

export const DropdownWrapper = styled.div`
    color: #fff;
`;

export const DropdownLinker = styled(LinkS)`
    display: grid;
    align-items: left;
    justify-content: left;
    padding-bottom: 30px;
    padding-top: 10px;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #C01717;
        transition: 0ms.2 ease-in-out;
    }
    &.active{
        color: #C01717;
    }
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  display: grid;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`

export const FormH2 = styled.h1`
  margin-bottom: 30px;
  margin-top: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  text-decoration: underline;
`