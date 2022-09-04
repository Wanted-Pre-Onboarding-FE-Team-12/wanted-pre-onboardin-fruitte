import {
  ProductContainer,
  ProductImage,
  SubTitle,
  ProductInformation,
  ProductName,
  ProductSummary,
  ProductPrice,
  ProductMessage,
} from './style';

const ProductInfo = ({ orderInfo }) => {
  const { name, unit, quantity, price, deliveryCharge, imgUrl } = orderInfo;

  return (
    <>
      <SubTitle>주문 상품 정보</SubTitle>
      <ProductContainer>
        <ProductImage src={imgUrl} alt="product description" />
        <ProductInformation>
          <ProductName>{name}</ProductName>
          {/* <span>{essential && '필수'}</span> */}
          <ProductSummary>
            <span>{unit} 봉지</span>
            <span>{quantity} 개</span>
          </ProductSummary>
          <ProductPrice>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ProductPrice>
          <ProductMessage>배송비 {deliveryCharge === 0 ? '무료' : deliveryCharge}</ProductMessage>
        </ProductInformation>
      </ProductContainer>
    </>
  );
};

export default ProductInfo;
