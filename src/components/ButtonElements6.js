import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#C01717' : '#252525')
    };
    white-space: nowrap;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: center;
    justify-content: center;
    text-align: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 5px;
    overflow: hidden;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#C01717')
        };
    }

    ${({ active }) =>
    active &&
    `
        background: #C01717;
        color: white;
    `}
`
