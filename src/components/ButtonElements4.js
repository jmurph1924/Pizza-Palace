import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 400px;
    width: 400px;
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
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: -200px;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#C01717')
        };
    }

    &.active{
        color: #C01717;
    }
`