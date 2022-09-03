import styled from 'styled-components';
import variables from '@styles/theme';

/**
 * 공통 스타일
 */
export const SubTitle = styled.h1`
  font-size: ${variables.sideSpace.contentSmall};
`;

/**
 * 결제하기 페이지
 * */
export const Container = styled.div`
  background-color: pink;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-size: ${variables.sideSpace.contentMedium};
`;

/**
 * 주문 상품 정보
 * */
export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
`;

/** 주문자 정보 */

/** 배송 정보 */

/** 주문 요약 */

/** 결제 수단 */
