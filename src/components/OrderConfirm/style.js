import styled from 'styled-components';

export const OrderedWrap = styled.div`
  width: 1200px;
  margin: 150px auto;
`;

export const ConfirmHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const PageName = styled.h2`
  margin-top: 2px;
  padding-left: 15px;
  font-size: 20px;
`;

export const HomeButton = styled.div`
  margin-top: 2px;
  padding-left: 15px;
  font-size: 20px;
`;

export const OrderedGoodsImg = styled.img`
  width: 100px;
  height: 120px;
`;

export const OrderedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120px;
  font-weight: 300;

  span {
    margin: 5px 10px;
  }

  span:nth-child(2) {
    font-weight: 600;
  }
`;

export const ProductHeader = styled.div`
  margin-right: 35px;
`;

export const OrderIdWrap = styled.div`
  margin-right: 25px;
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IsBest = styled.div`
  margin-left: auto;
  text-align: center;
  padding-top: 2px;
  border: 1px ridge gray;
  color: #fe5356;
  width: 50px;
  height: 30px;
`;

export const IsSale = styled.div`
  margin-left: auto;
  margin-top: 10px;
  padding-top: 3px;
  background-color: #fe5356;
  color: white;
  text-align: center;
  width: 50px;
  height: 30px;
`;

export const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const PrevPrice = styled.span`
  text-decoration: line-through;
`;

export const CurrPrice = styled.span`
  font-weight: 600;
`;

export const FooterWrap = styled.footer`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
`;

export const OrderInfoWrapper = styled.div`
  margin-top: 20px;
`;

export const TableName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #212121;
`;
export const Delivery = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
export const DeleiverStatus = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
