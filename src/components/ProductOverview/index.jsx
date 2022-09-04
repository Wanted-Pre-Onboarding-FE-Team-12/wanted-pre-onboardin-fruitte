import React from 'react';
import { 
    Overview, Thumbnail, ThumbnailImage, Selling, SellingHeader, 
    ProductActs, Act, Description, DeliveryInfo, SpanStrong 
} from './style';
import { ProductOrder } from '@components/ProductOrder/index.jsx';

export const ProductOverview = ({ data, optionSelectState }) => {

    let {imgUrl, name, message, deliveryInfo, option} = data;
    
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
                    <h2 className='price'></h2>
                    <p className='message'>
                        {message}
                    </p>
                    <DeliveryInfo>
                        {Object.keys(deliveryInfo).map(key => {
                            return <div key={key}>
                                <SpanStrong>{key}</SpanStrong>
                                <span>{deliveryInfo[key]}</span>
                            </div>;
                        })}
                    </DeliveryInfo>
                </Description>
                <ProductOrder option={option} optionSelectState={optionSelectState} />
            </Selling>
        </Overview>
    );
};

export default ProductOverview;