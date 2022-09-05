import styled from 'styled-components';

/**
 * 공통 스타일
 * */
export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 7rem 0;
  font-weight: 500;
`;

export const SubTitle = styled.h1`
  font-size: 2rem;
  color: #4e342e;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const LeftContainer = styled.div`
  flex-grow: 1;
  margin: 0 2rem;
`;

export const RightContainer = styled.div`
  flex-grow: 1;
  margin: 0 2rem;
`;

/**
 * 주문 상품 정보
 * */
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.6rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #eee;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const ProductName = styled.p`
  font-size: 1.4rem;
`;

export const ProductImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 1rem;
`;

export const ProductSummary = styled.p`
  color: #757575;
  font-size: 1.2rem;
  > span {
    margin-right: 1rem;
  }
`;

export const ProductPrice = styled.span`
  font-weight: 900;
`;

export const ProductMessage = styled.span`
  margin-top: 1rem;
  font-size: 1.3rem;
`;

/** 주문 정보 */
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  padding: 1.6rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #eee;
`;

export const OrderEssential = styled.div`
  > label {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
  > input {
    width: 180px;
    height: 30px;
    margin-right: 1rem;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }
  > input:focus {
    outline: none;
  }
`;

export const OrderOption = styled.div`
  margin-top: 1rem;
  > label {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
  > input {
    width: 86%;
    height: 30px;
    margin-right: 1rem;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }
  > input:focus {
    outline: none;
  }
`;

/** 배송 정보 */
export const ShippingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  padding: 1.6rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #eee;
`;

export const OrderCheckBox = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  input {
    transform: scale(1.4);
    margin-right: 1rem;
  }
  label {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
`;

export const OrderRecipient = styled.div`
  > label {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
  > input {
    width: 180px;
    height: 30px;
    margin-right: 1rem;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }
  > input:focus {
    outline: none;
  }
`;

export const AddressBox = styled.div`
  margin: 1rem 0;
  div > input[id='add-code'] {
    width: 180px;
    height: 30px;
    margin-right: 1rem;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }
  input[id='order-address'],
  input[id='order-extra-address'] {
    width: 100%;
    height: 30px;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }
  input[id='order-address'] {
    margin: 1rem 0;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #d7ccc8;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.8rem;
    border-radius: 0.3rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  button:hover {
    color: #fff;
    background-color: #6d4c41;
  }
  input:focus {
    outline: none;
  }
`;

export const MessageBox = styled.div`
  label {
    font-size: 1.3rem;
    font-weight: 700;
    color: #616161;
  }
`;

export const SelectBox = styled.div`
  margin-top: 1rem;
  select {
    width: 100%;
    height: 30px;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 1rem;
  padding-left: 1rem;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.5rem;
  padding-left: 1rem;
  font-size: 1.2rem;

  input:focus {
    outline: none;
  }
`;

/** 주문 요약 */
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  padding: 1.6rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #eee;
`;

export const SummaryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Word = styled.span`
  font-size: 1.2rem;
  color: #90a4ae;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  > :nth-child(1) {
    font-size: 1.2rem;
    color: #607d8b;
    font-weight: 700;
  }
  > :nth-child(2) {
    font-size: 1.2rem;
    color: #558b2f;
    font-weight: 700;
  }
`;

export const Price = styled.span`
  font-size: 1.2rem;
  color: #607d8b;
`;

export const Line = styled.hr`
  border: 1px solid #bdbdbd;
  margin: 1rem 0;
`;

/** 결제 수단 */
export const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #eee;
  font-size: 1.2rem;
`;

export const PayChoice = styled.div`
  display: flex;
  flex-direction: row;
  algin-items: center;

  > label {
    display: inline-block;
    vertical-align: top;
    margin-right: 1rem;
    > input {
      display: inline-block;
      vertical-align: top;
      margin-right: 0.3rem;
    }
  }
`;

export const PayTypeCashBox = styled.div`
  > div:nth-child(1) {
    margin: 1rem 0;
    span {
      color: #424242;
      font-weight: 800;
    }
    p {
      color: #616161;
    }
  }
  > div:nth-child(2) {
    margin: 1rem 0;
    label {
      input {
        width: 100%;
        height: 30px;
        margin-top: 1rem;
        padding-left: 1rem;
        border: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 0.5rem;
        padding-left: 1rem;
        font-size: 1.2rem;
      }
      input:focus {
        outline: none;
      }
    }
    p {
      margin-top: 1rem;
      color: #616161;
    }
  }
`;

export const PayReceipt = styled.div`
  display: flex;
  flex-direction: row;
  algin-items: center;

  > label {
    display: inline-block;
    vertical-align: top;
    margin-right: 3%;
    margin-right: 1rem;
    > input {
      display: inline-block;
      vertical-align: top;
      margin-right: 0.3rem;
    }
  }
`;

export const PayReceiptCheckBox = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 1.3rem;
    margin: 1rem 0;
    input {
      transform: scale(1.2);
      margin-right: 0.7rem;
    }
  }
`;

export const PayReceiptBox = styled.div`
  > input {
    width: 100%;
    height: 30px;
    margin: 1rem 1rem 0 0;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }
  > input:focus {
    outline: none;
  }
`;

/** 결제 */
export const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: space-between;
  padding: 1.6rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #eee;
`;

export const CheckBox = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  input {
    transform: scale(1.4);
    margin-right: 1rem;
  }
  label {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
`;

export const PayButton = styled.button`
  width: 100%;
  padding: 1rem 1rem;
  font-size: 1.5rem;
  color: #827717;
  font-weight: 900;
  background-color: #dcedc8;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.5rem;
`;
