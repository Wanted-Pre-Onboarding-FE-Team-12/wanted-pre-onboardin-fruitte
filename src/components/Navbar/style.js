import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 20rem 1fr;
  align-items: center;
  padding: 1rem ${({ theme }) => theme.sideSpace.large};
  margin: 2rem 0;
  min-height: 100px;
  border-bottom: 1px solid #cacaca;
`;

export const NavLogo = styled.div`
  .logo-image {
    max-width: 20rem;
  }
`;
