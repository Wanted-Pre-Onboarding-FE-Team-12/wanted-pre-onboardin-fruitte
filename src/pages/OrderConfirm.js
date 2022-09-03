import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderList from '../components/OrderConfirm/orderList';
import { ConfirmHeader, OrderedWrap, PageName } from '../components/OrderConfirm/style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Layout from '@layouts/';

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
        <OrderList goods={orderGoods} />
      </OrderedWrap>
    </Layout>
  );
};

export default OrderConfirm;
