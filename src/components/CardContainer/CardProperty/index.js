import React from 'react';
import styled from 'styled-components';
import variables from '@styles/theme';

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
    background-color: ${variables.colors.darkRed};
  }
  .soldOut {
    background-color: ${variables.colors.darkGreen};
  }
  .sale {
    background-color: ${variables.colors.lightOrange};
  }
`;

export default CardProperty;
