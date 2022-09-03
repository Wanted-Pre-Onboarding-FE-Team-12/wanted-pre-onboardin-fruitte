import React from 'react';
import { useState } from 'react';
import CardList from '@components/CardList';
import styled from 'styled-components';

const CardContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const buttonArray = () => {
    const result = [];
    for (let i = 1; i <= 3; i++) {
      result.push(
        <button key={i} onClick={e => setCurrentPage(e.target.value)} value={i}>
          {i}
        </button>,
      );
    }
    return result;
  };

  return (
    <ProductContainer>
      <CardList currentPage={currentPage}></CardList>
      <ButtonContainer>{<div>{buttonArray()}</div>}</ButtonContainer>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 0;
  min-width: 1080px;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  button {
    margin: 10px;
    width: 30px;
    height: 30px;
    border: 0;
    background-color: white;
  }
`;

export default CardContainer;
