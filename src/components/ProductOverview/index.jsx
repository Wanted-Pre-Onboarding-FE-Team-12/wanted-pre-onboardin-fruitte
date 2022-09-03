import React from 'react';
import { Overview, Thumbnail, ThumbnailImage, Selling, SellingHeader,Title, 
    ProductActs, SaveProduct, ShareProduct, 
    Description, Price, Message, DeliveryInfo,SpanStrong, Span,
    Order, Form, Label, DropDown, OrderButtons, Button } from './style';

export const ProductOverview = ({ data }) => {
    return (
        <Overview>
            <Thumbnail>
                <ThumbnailImage src={data.imgUrl}></ThumbnailImage>
            </Thumbnail>
            <Selling>
                <SellingHeader>
                    <Title> {data.name} </Title>
                    <ProductActs>
                        <SaveProduct>저장</SaveProduct>
                        <ShareProduct>공유</ShareProduct>
                    </ProductActs>
                </SellingHeader>
                <Description>
                    <Price></Price>
                    <Message>
                        {data.message}
                    </Message>
                    <DeliveryInfo>
                        {Object.keys(data.deliveryInfo).map(key => {
                            return <div key={key}>
                                <SpanStrong>{key}</SpanStrong>
                                <Span>{data.deliveryInfo[key]}</Span>
                            </div>;
                        })}
                    </DeliveryInfo>
                </Description>
                <Order>
                    <Form>
                        <Label>*필수선택</Label>
                        <DropDown>
                            <option value="default">필수선택입니다.</option>
                            {Object.keys(data.option).map((key) => {
                                let { id, name, price } = data.option[key];
                                return <option key={id} value={name}>{name} {price}</option>;
                            })}
                        </DropDown>

                    </Form>
                    <OrderButtons>
                        <Button>구매하기</Button>
                        <Button cart>장바구니</Button>
                    </OrderButtons>
                </Order>
            </Selling>
        </Overview>
    );
};

export default ProductOverview;