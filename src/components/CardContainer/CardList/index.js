import React from 'react';
import { useState, useEffect } from 'react';
import Card from '@components/CardContainer/Card';
import { getProductList } from '@api/GetproductApi';
import styled from 'styled-components';

const CardList = props => {
  const [product, setProduct] = useState([]);
  const { currentPage } = props;
  const PRODUCTS_PER_PAGE = 10;

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    getProductList().then(res => {
      setProduct(res);
    });
  }, [currentPage]);

  return (
    <CardContent>
      {currentProduct.map(data => (
        <Card key={data.id} data={data}></Card>
      ))}
    </CardContent>
  );
};

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  min-height: 700px;
`;

export default CardList;
