import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@layouts/index';
import { Wrapper, Navigation, NavButton } from './style';
import { ProductOverview } from '@components/ProductOverview/index.jsx';
import { ProductFeature } from '@components/ProductFeature/index.jsx';

export const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;

  const onLinkClick = event => {
    //스크롤이벤트
    //let getMeTo = document.getElementById(name);
    //getMeTo.scrollIntoView({behavior: 'smooth'}, true);
  };
  return (
    <Layout>
      <Wrapper>
        <ProductOverview data={data} />
        <Navigation>
          <NavButton onClick={onLinkClick}>상품정보</NavButton>
          <NavButton onClick={onLinkClick}>리뷰</NavButton>
          <NavButton onClick={onLinkClick}>문의</NavButton>
        </Navigation>
        <ProductFeature
          productInfoImgUrl={'https://cdn.imweb.me/upload/S201907022014f7de8adf6/b196b2ba9b092.jpg'}
        />
      </Wrapper>
    </Layout>
  );
};

export default ProductDetail;
