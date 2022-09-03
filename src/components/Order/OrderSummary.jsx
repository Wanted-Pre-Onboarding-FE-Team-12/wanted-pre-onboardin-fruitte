import { SubTitle } from './style';

const OrderSummary = ({ orderInfo }) => {
  return (
    <div>
      <SubTitle>주문 요약</SubTitle>
      <p>
        <span>상품 가격</span>
        <span>{orderInfo.price}원</span>
      </p>
      <p>
        <span>배송비</span>
        <span>{orderInfo.deliveryCharge === 0 ? '무료' : orderInfo.deliveryCharge}원</span>
      </p>
      <hr />
      <p>
        <span>총 주문 금액</span>
        <span>{orderInfo.price}원</span>
      </p>
    </div>
  );
};

export default OrderSummary;
