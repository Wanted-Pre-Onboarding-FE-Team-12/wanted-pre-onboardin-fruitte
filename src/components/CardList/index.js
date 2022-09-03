import React from 'react';
import { useState, useEffect } from 'react';
import Card from '@components/Card';
import { getProductList } from '@api/GetproductApi';
// import styled from 'styled-components';

const CardList = props => {
  const [product, setProduct] = useState([]);
  const { currentPage } = props;
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    getProductList().then(res => {
      setProduct(res);
    });
  }, [currentPage]);

  return (
    <>
      {currentProduct.map(data => (
        <Card key={data.id} data={data}></Card>
      ))}
    </>
  );
};

export default CardList;
