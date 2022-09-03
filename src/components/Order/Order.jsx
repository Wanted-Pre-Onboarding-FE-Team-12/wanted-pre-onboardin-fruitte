import { useEffect } from 'react';
import OrderProductInfo from '@components/Order/OrderProductInfo';
import Layout from '@layouts/index';
import { Container, Title } from './style';

const Order = () => {
  useEffect(() => {
    // json 파일 읽어오기
    fetch('/product.json')
      // 응답값을 json 객체로 변경
      .then(res => res.json())
      // 객체
      .then(data => console.log(data));
  }, []);

  return (
    <Layout>
      <Container>
        <Title>결제 페이지</Title>
        <OrderProductInfo />
      </Container>
    </Layout>
  );
};

export default Order;
