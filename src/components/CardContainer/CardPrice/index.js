import React from 'react';
import styled from 'styled-components';

const CardPrice = props => {
  const { price, isSale, salePrice } = props;
  return (
    <Price>
      {isSale ? (
        <>
          <div className="price">{price * salePrice}원</div>
          <div className="prevPrice">{price}원</div>
        </>
      ) : (
        <div className="price">{price}원</div>
      )}
    </Price>
  );
};

const Price = styled.div`
  display: flex;
  text-align: start;
  margin: 5px;
  font-size: large;
  transition: all ease 2s;
  &:hover {
    cursor: default;
  }
  .price {
    margin-right: 20px;
    font-weight: 500;
  }
  .prevPrice {
    text-decoration: line-through;
    font-weight: 100;
  }
`;

export default CardPrice;
