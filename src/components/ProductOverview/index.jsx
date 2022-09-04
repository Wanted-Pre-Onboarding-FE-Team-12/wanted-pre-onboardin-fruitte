import React from 'react';
import { 
    Overview, Thumbnail, ThumbnailImage, Selling, SellingHeader, ProductActs,
    Act, Description, DeliveryInfo,SpanStrong, Form, DropDown, Button 
} from './style';

export const ProductOverview = ({ data }) => {
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
                <section className="order">
                    <Form>
                        <label>*필수선택</label>
                        <DropDown>
                            <option value="default">필수선택입니다.</option>
                            {Object.keys(option).map((key) => {
                                let { id, name, price } = option[key];
                                return <option key={id} value={name}>{name} {price}</option>;
                            })}
                        </DropDown>

                    </Form>
                    <div className="orderButtons">
                        <Button>구매하기</Button>
                        <Button cart>장바구니</Button>
                    </div>
                </section>
            </Selling>
        </Overview>
    );
};

export default ProductOverview;