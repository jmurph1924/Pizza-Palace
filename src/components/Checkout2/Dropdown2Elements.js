import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const DropdownContainer = styled.aside`
    background: rgba(0,0,0,0.80);
    margin-left: px;
    width: 10px;
    position: fixed;
    top: 80px;
    list-style: none;
    text-align: center;
`;

export const DropdownWrapper = styled.div`
    color: #fff;
`;

export const DropdownLinker = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
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