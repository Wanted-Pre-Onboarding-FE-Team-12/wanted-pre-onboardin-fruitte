import React from 'react';
import styled from 'styled-components';

const CardProperty = props => {
  const { isBest, isSoldOut, isSale } = props;
  return (
    <ProductProperty>
      {isBest && <div className="best">best</div>}
      {isSoldOut && <div className="soldOut">sold out</div>}
      {isSale && <div className="sale">sale</div>}
    </ProductProperty>
  );
};

const ProductProperty = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  div {
    margin-right: 10px;
    font-size: small;
    font-weight: 900;
  }
  .best {
    background-color: ${props => props.theme.colors.darkRed};
  }
  .soldOut {
    background-color: ${props => props.theme.colors.darkGreen};
  }
  .sale {
    background-color: ${props => props.theme.colors.lightRed};
  }
`;

export default CardProperty;
