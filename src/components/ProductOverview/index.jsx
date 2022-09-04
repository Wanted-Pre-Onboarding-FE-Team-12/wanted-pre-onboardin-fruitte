import React from 'react';
import { 
    Overview, Thumbnail, ThumbnailImage, Selling, SellingHeader, ProductActs,
    Act, Description, DeliveryInfo,SpanStrong, Form, DropDown, Button 
} from './style';

export const ProductOverview = ({ data }) => {
    return (
        <Overview>
            <Thumbnail>
                <ThumbnailImage src={data.imgUrl}></ThumbnailImage>
            </Thumbnail>
            <Selling>
                <SellingHeader>
                    <h1> {data.name} </h1>
                    <ProductActs>
                        <Act>저장</Act>
                        <Act>공유</Act>
                    </ProductActs>
                </SellingHeader>
                <Description>
                    <h2 className='price'></h2>
                    <p className='message'>
                        {data.message}
                    </p>
                    <DeliveryInfo>
                        {Object.keys(data.deliveryInfo).map(key => {
                            return <div key={key}>
                                <SpanStrong>{key}</SpanStrong>
                                <span>{data.deliveryInfo[key]}</span>
                            </div>;
                        })}
                    </DeliveryInfo>
                </Description>
                <section className="order">
                    <Form>
                        <label>*필수선택</label>
                        <DropDown>
                            <option value="default">필수선택입니다.</option>
                            {Object.keys(data.option).map((key) => {
                                let { id, name, price } = data.option[key];
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