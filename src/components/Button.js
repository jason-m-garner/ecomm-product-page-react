import styled from 'styled-components';
import { lighten } from 'polished';

const Button = styled.button`
  appearance: none;
  background-color: #333;
  border-radius: 5px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 6rem;
  margin-top: 2rem;
  padding: 0 4rem;
  text-align: center;
  width: 100%;
  &:hover {
    background-color: ${lighten(.05, '#333')}
  }
  @media screen and (min-width: 400px) {
    width: auto;
  }  
`;

export default Button;
