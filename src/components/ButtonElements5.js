import styled from 'styled-components'


export const Button = styled.button`
    background: #C01717;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  width: 100px;
  text-decoration: none;
  justify-content: center;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
    margin-top: 20px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#C01717')
        };
    }

    &.active{
        color: black;
    }
`
