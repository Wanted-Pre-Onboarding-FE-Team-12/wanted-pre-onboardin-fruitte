import React from 'react';
import { Wrapper, Navigation, ProductFeature} from './style';
import { NavButton, Content, Review, Question } from './style';
import { ProductOverview } from '@components/ProductOverview/index.js';

export const ProductDetail = () => {

    const onLinkClick = (name) => {
        alert(name)
        //let getMeTo = document.getElementById(name);
        //getMeTo.scrollIntoView({behavior: 'smooth'}, true);
    };

    const data = {
        "id": 3,
        "imgUrl": "https://cdn.imweb.me/thumbnail/20220622/420f289e15350.jpg",
        "name": "국산 강원도 화천 생 아스파라거스 1kg, 2kg",
        "price": 40000,
        "is_best": true,
        "is_sold_out": false,
        "is_sale": true,
        "sale_price": 0.5,
        "message": '미생물을 이용한 친환경 농법으로 길러 더욱 맛있는 국내산 친환경 생 아스파라거스',
        "origin": "강원도",
        "deliveryInfo": {
            '원산지':'강원도 화천군',
            '배송 방법':'택배',
            '배송비': '4,000원 (40,000원 이상 무료 배송)',
        },
        "productInfoImgUrl": "https://cdn.imweb.me/upload/S201907022014f7de8adf6/b196b2ba9b092.jpg",
        "option": [
            {
                "id": 1,
                "name": "1kg",
                "price": 40000
            },
            {
                "id": 2,
                "name": "2kg",
                "price": 76000
            }
        ]
    }
    
    return (
        <Wrapper>
            <ProductOverview data={data}/>
            <Navigation>
                <NavButton onClick={onLinkClick}>상품정보</NavButton>
                <NavButton onClick={onLinkClick}>리뷰</NavButton>
                <NavButton onClick={onLinkClick}>문의</NavButton>
            </Navigation>
            <ProductFeature>
                <Content id='content'>
                    <img width="100%" display="block" src={data.productInfoImgUrl}></img>
                </Content>
                <Review id='review'> 리뷰 섹션</Review>
                <Question id='question'> 문의 섹션</Question>
            </ProductFeature>
        </Wrapper>
    );
};

export default ProductDetail;