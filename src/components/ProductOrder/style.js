import styled from 'styled-components';
import variables from '@styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const DropDown = styled.select`
  font-size: 1.3rem;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  background-color: ${props =>
    props.cart ? `${variables.colors.darkGreen};` : `${variables.colors.white}`};
  border: none;
  color: ${props => (props.cart ? `${variables.colors.white}` : `${variables.colors.darkGreen};`)};
  padding: 2rem;
  font-size: 2rem;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid ${variables.colors.darkGreen};
`;
