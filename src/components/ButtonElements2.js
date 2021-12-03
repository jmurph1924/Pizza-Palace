import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#C01717' : '#252525')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: inline-flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#C01717')
        };
    }

    &.active {
        background: #C01717;
        color: white;
    }

    ${({ active }) =>
    active &&
    `
        background: #C01717;
        color: white;
    `}
`
