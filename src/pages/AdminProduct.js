import React, { useEffect, useState } from 'react';

import TableBody from '@components/TableBody';
import TableHeader from '@components/TableHeader';

import { getProductList } from '@api/adminApi';

import styled from 'styled-components';

const TITLES = [
  { name: '상품번호', width: '50px' },
  { name: '상품명', width: '250px' },
  { name: '상품가격', width: '50px' },
];

const AdminProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const productData = await getProductList();
      setProduct(productData);
    })();
  }, []);

  const deleteProduct = id => {
    const newProducts = [...product];
    const result = newProducts.filter(item => item.id !== id);

    setProduct(result);
  };

  const setVisibleProduct = id => {
    const newProducts = [...product];

    const result = newProducts.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        newItem.is_visible = !newItem.is_visible;
      }
      return newItem;
    });
    setProduct(result);
  };

  return (
    <Wrapper>
      <Table>
        <TableHeader titleArr={TITLES} />
        <TableBody
          product={product}
          deleteProduct={deleteProduct}
          setVisibleProduct={setVisibleProduct}
        />
      </Table>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table``;

export default AdminProduct;
