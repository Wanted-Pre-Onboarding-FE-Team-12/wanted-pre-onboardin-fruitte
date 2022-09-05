import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderList from '../components/OrderConfirm/orderList';
import {
  ConfirmHeader,
  HomeButton,
  OrderedWrap,
  PageName,
  FooterWrap,
} from '../components/OrderConfirm/style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Layout from '@layouts/';
import UserData from '../components/OrderConfirm/userData';
import HomeIcon from '@mui/icons-material/Home';

const OrderConfirm = () => {
  const [orderGoods, setOrderGoods] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/data/product.json').then(res => {
      setOrderGoods(res.data);
    });
  }, []);

  const goToPrevPage = () => {
    navigate(-1);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Layout>
      <OrderedWrap>
        <ConfirmHeader>
          <ArrowBackIcon
            fontSize="small"
            onClick={goToPrevPage}
            style={{ marginTop: '2px', cursor: 'pointer' }}
          />
          <PageName>주문 상세 내역</PageName>
        </ConfirmHeader>
        <OrderList />
        <UserData />
        <FooterWrap>
          <HomeIcon fontSize="large" style={{ marginTop: '2px', cursor: 'pointer' }} />
          <HomeButton onClick={goToHome}>홈으로</HomeButton>
        </FooterWrap>
        <OrderList goods={orderGoods} />
      </OrderedWrap>
    </Layout>
  );
};

export default OrderConfirm;
