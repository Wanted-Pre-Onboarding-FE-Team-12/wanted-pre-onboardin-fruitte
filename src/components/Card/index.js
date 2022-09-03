import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// sale_price, origin
const Card = props => {
  const { data } = props;
  const { id, imgUrl, name, price, is_best, is_sold_out, is_sale } = data;

  const navigate = useNavigate();

  const goToDetailHandle = () => {
    navigate(`/page/${id}`);
  };

  return (
    <Container onClick={() => goToDetailHandle()}>
      <CardImage alt={name} src={imgUrl} />
      <CardTitle>{name}</CardTitle>
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
`;

const CardTitle = styled.div`
  font-size: 18px;
`;

const CardPrice = styled.div`
  font-size: 18px;
`;

const CardProperty = styled.div`
  display: flex;
  flex-direction: row;
  div {
    margin-right: 10px;
    font-size: 15px;
  }
  .best {
    background-color: red;
  }
  .soldOut {
    background-color: green;
  }
  .sale {
    background-color: purple;
  }
`;

export default Card;
