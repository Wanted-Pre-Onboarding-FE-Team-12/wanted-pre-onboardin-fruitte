import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardPrice from '@components/CardContainer/CardPrice';
import CardProperty from '@components/CardContainer/CardProperty';
import styled from 'styled-components';

const Card = props => {
  const { data } = props;
  const { id, imgUrl, name, price, is_best, is_sold_out, is_sale, sale_price } = data;

  const navigate = useNavigate();

  const goToDetailHandle = () => {
    navigate(`/detail/${id}`, { state: data });
  };

  return (
    <Container>
      <CardImage alt={name} src={imgUrl} onClick={() => goToDetailHandle()} />
      <CardTitle onClick={() => goToDetailHandle()}>{name}</CardTitle>
      <CardPrice price={price} isSale={is_sale} salePrice={sale_price} />
      <CardProperty isBest={is_best} isSoldOut={is_sold_out} isSale={is_sale} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 18%;
  min-width: 250px;
  max-width: 350px;
  height: 300px;
  margin: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.5s;
  }
`;

const CardTitle = styled.div`
  text-align: center;
  margin: 5px;
  font-size: large;
  &:hover {
    cursor: pointer;
  }
`;

export default Card;
