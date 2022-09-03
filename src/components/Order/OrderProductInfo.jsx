import variables from '@styles/theme';
import { ProductImage } from './style';

/**
 * dummy 값으로 화면 보여주기
 */
const ProductInfo = ({ orderInfo }) => {
  // orderInfo 변수로 저장
  const { name, essential, unit, quantity, price, deliveryCharge, imgUrl } = orderInfo;

  return (
    <div>
      <h1 style={{ fontSize: variables.sideSpace.contentSmall }}>주문 상품 정보</h1>
      <ProductImage src={imgUrl} alt="product description" />
      <p>{name}</p>
      <span>{essential && '필수'}</span>
      <span>
        {unit}봉지 {quantity}개
      </span>
      <span>{price}원</span>
      <span>{deliveryCharge === 0 && '배송비 무료'}</span>
    </div>
  );
};

export default ProductInfo;
