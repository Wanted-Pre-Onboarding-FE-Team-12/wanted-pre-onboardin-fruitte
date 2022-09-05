import React from 'react';

import Layout from '@layouts/index';
import { Outlet } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import styled from 'styled-components';

const Admin = () => {
  return (
    <Layout isAdmin>
      <Wrapper>
        <Sidebar />
        {<Outlet />}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 30rem 1fr;
`;

export default Admin;
