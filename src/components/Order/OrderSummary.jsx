import { SummaryContainer, SubTitle, SummaryBox, Word, Price, Line, PriceInfo } from './style';

const OrderSummary = ({ orderInfo }) => {
  const { price, deliveryCharge } = orderInfo;

  return (
    <>
      <SubTitle>주문 요약</SubTitle>
      <SummaryContainer>
        <SummaryBox>
          <Word>상품 가격</Word>
          <Price>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Price>
        </SummaryBox>
        <SummaryBox>
          <Word>배송비</Word>
          <Price>{deliveryCharge === 0 ? '무료' : `${deliveryCharge}원`}</Price>
        </SummaryBox>
        <Line />
        <PriceInfo>
          <span>총 주문 금액</span>
          <span>
            {price === 0 ? '무료' : `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
          </span>
        </PriceInfo>
      </SummaryContainer>
    </>
  );
};

export default OrderSummary;
