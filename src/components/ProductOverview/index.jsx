import React from 'react';
import {
  Overview,
  Thumbnail,
  ThumbnailImage,
  Selling,
  SellingHeader,
  ProductActs,
  Act,
  Description,
  DeliveryInfo,
  SpanStrong,
} from './style';
import { ProductOrder } from '@components/ProductOrder/index.jsx';

export const ProductOverview = ({ data }) => {
  let { imgUrl, name, message, delivery_info, option } = data;
  const delivery = { origin: '원산지', is_delivery: '배송방법', price: '배송비' };

  return (
    <Overview>
      <Thumbnail>
        <ThumbnailImage src={imgUrl}></ThumbnailImage>
      </Thumbnail>
      <Selling>
        <SellingHeader>
          <h1> {name} </h1>
          <ProductActs>
            <Act>저장</Act>
            <Act>공유</Act>
          </ProductActs>
        </SellingHeader>
        <Description>
          <h2 className="price"></h2>
          <p className="message">{message}</p>
          <DeliveryInfo>
            {Object.keys(delivery_info[0]).map(key => {
              return (
                <div key={key}>
                  <SpanStrong>{delivery[key]}</SpanStrong>
                  <span>{delivery_info[0][key]}</span>
                </div>
              );
            })}
          </DeliveryInfo>
        </Description>
        <ProductOrder option={option} data={data} />
      </Selling>
    </Overview>
  );
};

export default ProductOverview;
