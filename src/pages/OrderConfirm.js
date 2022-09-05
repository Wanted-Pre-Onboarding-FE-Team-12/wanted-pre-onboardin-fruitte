import OrderList from '../components/OrderConfirm/orderList';
import { ConfirmHeader, HomeButton, OrderedWrap, PageName } from '../components/OrderConfirm/style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Layout from '@layouts/';
import UserData from '../components/OrderConfirm/userData';
import HomeIcon from '@mui/icons-material/Home';
import { FooterWrap } from '@components/OrderConfirm/style';

const OrderConfirm = () => {
  const navigate = useNavigate();

  const goToPrevPage = () => {
    navigate(-1);
  };

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <Layout>
      <OrderedWrap>
        <ConfirmHeader>
          <ArrowBackIcon
            fontSize="medium"
            onClick={goToPrevPage}
            style={{ marginTop: '5px', cursor: 'pointer' }}
          />
          <PageName>주문 상세 내역</PageName>
        </ConfirmHeader>
        <OrderList />
        <UserData />
        <FooterWrap>
          <HomeIcon fontSize="large" style={{ marginTop: '2px', cursor: 'pointer' }} />
          <HomeButton onClick={goToHome}>홈으로</HomeButton>
        </FooterWrap>
      </OrderedWrap>
    </Layout>
  );
};

export default OrderConfirm;
