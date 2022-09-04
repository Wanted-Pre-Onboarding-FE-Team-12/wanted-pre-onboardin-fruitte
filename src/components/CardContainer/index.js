import React from 'react';
import { useState } from 'react';
import CardList from '@components/CardList';
import CardListButtons from '@components/CardListButtons';
import styled from 'styled-components';

const CardContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ProductContainer>
      <CardList currentPage={currentPage}></CardList>
      <CardListButtons setCurrentPage={setCurrentPage} />
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10% 0;
  min-width: 1080px;
  height: 100%;
`;

export default CardContainer;
