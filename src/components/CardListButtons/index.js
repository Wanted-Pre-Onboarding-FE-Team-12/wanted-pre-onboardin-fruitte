import React from 'react';
import styled from 'styled-components';

const CardListButtons = props => {
  const { setCurrentPage } = props;

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
  return <ButtonContainer>{<div>{buttonArray()}</div>}</ButtonContainer>;
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  button {
    margin: 10px;
    width: 30px;
    height: 30px;
    font-size: large;
    border: 0;
    background-color: white;
  }
`;

export default CardListButtons;
