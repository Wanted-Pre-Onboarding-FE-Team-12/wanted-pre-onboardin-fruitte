import styled from 'styled-components';
import variables from '@styles/theme';

//Main sections
export const Wrapper = styled.div``;

export const Navigation = styled.nav`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: ${variables.sideSpace.small};
`;

// Navigation
export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${variables.sideSpace.small};
  flex: 1 1 auto;
`;
