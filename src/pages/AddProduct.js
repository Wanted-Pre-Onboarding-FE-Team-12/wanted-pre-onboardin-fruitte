import React from 'react';
import AdminProductForm from '@components/AdminProductForm';

// CSS
import styled from 'styled-components';

const AddProduct = () => {
  return (
    <Wrapper>
      <AdminProductForm />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 0 2rem;
  padding: 2rem 0;
`;

export default AddProduct;
