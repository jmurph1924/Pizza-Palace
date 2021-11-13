import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 400px;
    background: ${({primary}) => (primary ? '#C01717' : '#252525')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    width: 400px;
    outline: none;
    border: none;
    cursor: pointer;
    display: center;
    justify-content: center;
    text-align: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: -200px;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#C01717')
        };
    }
`
