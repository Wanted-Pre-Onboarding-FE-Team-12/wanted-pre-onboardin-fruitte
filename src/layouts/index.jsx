import styled, { ThemeProvider } from 'styled-components';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

// CSS
import GlobalStyles from '@styles/globalStyle';
import theme from '@styles/theme';

const Layout = ({ children, isAdmin }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Wrapper>{children}</Wrapper>

      {!isAdmin && <Footer />}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export const Wrapper = styled.div`
  min-height: calc(100vh - 100px - 200px);
  padding: 0 ${({ theme }) => theme.sideSpace.large};
`;

export default Layout;
