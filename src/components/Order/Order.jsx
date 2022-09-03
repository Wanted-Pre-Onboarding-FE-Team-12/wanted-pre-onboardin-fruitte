import { useRecoilValue } from 'recoil';
import { order } from '@state/state';
import OrderProductInfo from '@components/Order/OrderProductInfo';
import Layout from '@layouts/index';
import { Container, Title } from './style';

/**
 * useRecoilState hook을 사용하여 컴포넌트에서 atom을 읽고 쓴다.
 * (React의 useState와 비슷하지만 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있음)
 *
 * 컴포넌트가 atom의 항목을 읽고/쓰기 -> useRecoilState
 * 컴포넌트가 atom의 항목을 읽기만 -> useRecoilValue
 */

/**
 * 1. 결제하기 페이지에서는 주문하려는 상품의 정보를 받아온다.
 * 2. 주문자 정보에서 이름, 연락처, 이메일의 정보를 입력받는다.
 * 3. 배송 정보에서 배송 정보를 입력받는다.
 * 4. 주문 요약에서는 1의 정보를 요약해준다.
 * 5. 결제수단은 신용카드 무통장 입금을 선택할 수 있다.
 *
 * 결제하기 버튼을 누르면 결제 정보를 state로 저장해야 된다.
 *  상품명
 *  수량, 갯수
 *  가격
 *  배송비 정보
 *  주문자 정보
 *    이름, 연락처, 이메일?
 *  배송 정보
 *  결제 수단
 */

const Order = () => {
  // 주문 상품 정보 저장
  const [orderInfo] = useRecoilValue(order); // setState 함수 우선 필요가 없어서 지움

  return (
    <Layout>
      <Container>
        <Title>결제 페이지</Title>
        <OrderProductInfo orderInfo={orderInfo} />
        {/** 주문자 정보 */}
        <div>
          <h2>주문자 정보</h2>
          <div>
            <label htmlFor="user-name">이름</label>
            <input type="text" required id="user-name" />
            <label htmlFor="user-tel">연락처</label>
            <input type="tel" placeholder="연락처" required id="user-tel" />
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Order;
