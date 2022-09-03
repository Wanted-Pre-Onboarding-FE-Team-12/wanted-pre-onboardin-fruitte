import Layout from '@layouts/index';
import React from 'react';
import { useRecoilState } from 'recoil';
import { productState } from 'src/store/store';

const List = () => {
  const [product] = useRecoilState(productState);

  console.log(product);
  return <Layout>List</Layout>;
};

export default List;
