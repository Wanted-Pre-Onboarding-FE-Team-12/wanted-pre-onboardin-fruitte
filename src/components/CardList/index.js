import React from 'react';
import styled from 'styled-components';

const CardList = () => {
  return <CardContainer>나는 카드 리스트</CardContainer>;
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 90%;
  min-width: 1080px;
  text-align: center;
  height: 100%;
`;

export default CardList;
