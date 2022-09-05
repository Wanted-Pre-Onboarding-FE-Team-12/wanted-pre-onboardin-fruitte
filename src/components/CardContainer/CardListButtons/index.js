import React from 'react';
import styled from 'styled-components';

const CardListButtons = props => {
  const { setCurrentPage, currentPage } = props;

  const pageInfoHandle = i => {
    if (parseInt(currentPage) === i) return 'currentPage';
    else return;
  };

  const buttonArray = () => {
    const result = [];
    const FIRST_PAGE = 1;
    const LAST_PAGE = 3;

    for (let i = FIRST_PAGE; i <= LAST_PAGE; i++) {
      result.push(
        <button
          className={pageInfoHandle(i)}
          key={i}
          onClick={e => setCurrentPage(e.target.value)}
          value={i}
        >
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

    &:hover {
      transition: all ease 1s 0s;
      background-color: ${props => props.theme.colors.lightGreen};
    }
  }
  .currentPage {
    background-color: ${props => props.theme.colors.lightGreen};
  }
`;

export default CardListButtons;
