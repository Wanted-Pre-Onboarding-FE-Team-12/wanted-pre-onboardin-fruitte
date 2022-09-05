import React from 'react';
import { Feature, Content, Review, Question } from './style';

export const ProductFeature = ({ productInfoImgUrl }) => {
  return (
    <Feature>
      <Content id="content">
        <img width="100%" display="block" src={productInfoImgUrl}></img>
      </Content>
      <Review id="review"> 리뷰 섹션</Review>
      <Question id="question"> 문의 섹션</Question>
    </Feature>
  );
};

export default ProductFeature;
