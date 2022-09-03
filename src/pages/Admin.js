import React from 'react';

import Layout from '@layouts/index';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <Layout isAdmin>
      Admin Page
      <Outlet />
    </Layout>
  );
};

export default Admin;
