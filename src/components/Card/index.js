import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import variables from '@styles/theme';

// sale_price, origin
const Card = props => {
  const { data } = props;
  const { id, imgUrl, name, price, is_best, is_sold_out, is_sale } = data;

  const navigate = useNavigate();

  const goToDetailHandle = () => {
    navigate(`/page/${id}`);
  };

  return (
    <Container>
      <CardImage alt={name} src={imgUrl} onClick={() => goToDetailHandle()} />
      <CardTitle onClick={() => goToDetailHandle()}>{name}</CardTitle>
      <CardPrice>{is_sale ? price * is_sale : price}</CardPrice>
      <CardProperty>
        {is_best && <div className="best">best</div>}
        {is_sold_out && <div className="soldOut">sold out</div>}
        {is_sale && <div className="sale">sale</div>}
      </CardProperty>
    </Container>
  );
};

const Container = styled.div`
  width: 18%;
  min-width: 250px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
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

const CardPrice = styled(CardTitle)`
  text-align: start;
  font-weight: 300;
`;

const CardProperty = styled.div`
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

export default Card;
