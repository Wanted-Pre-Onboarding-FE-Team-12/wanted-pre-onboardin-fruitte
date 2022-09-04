import React, { useEffect, useState } from 'react';

import { getProductList } from '@api/adminApi';

import styled from 'styled-components';
import Table from '@components/Table';
import Pagination from '@components/Pagination';

const TITLES = [
  { name: '상품번호', width: '50px' },
  { name: '상품명', width: '250px' },
  { name: '상품가격', width: '50px' },
];

const AdminProduct = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  // const offset = useMemo(() => (page - 1) * limit, [page, limit]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    (async () => {
      const [productData, totalSize] = await getProductList(page, limit);
      setTotal(totalSize);
      if (productData.length > 0) {
        setProduct(productData);
      }
    })();
  }, [page]);

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
      <Table
        titleArr={TITLES}
        product={product}
        deleteProduct={deleteProduct}
        setVisibleProduct={setVisibleProduct}
      />
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default AdminProduct;
