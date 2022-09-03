import { SubTitle } from './style';

const OrderSummary = ({ orderInfo }) => {
  const { price, deliveryCharge } = orderInfo;

  return (
    <div>
      <SubTitle>주문 요약</SubTitle>
      <p>
        <span>상품 가격</span>
        <span>{price}원</span>
      </p>
      <p>
        <span>배송비</span>
        <span>{deliveryCharge === 0 ? '무료' : deliveryCharge}원</span>
      </p>
      <hr />
      <p>
        <span>총 주문 금액</span>
        <span>{price}원</span>
      </p>
    </div>
  );
};

export default OrderSummary;
