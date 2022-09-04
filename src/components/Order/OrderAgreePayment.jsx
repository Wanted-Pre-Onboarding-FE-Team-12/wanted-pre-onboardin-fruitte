import { SubTitle } from './style';

const OrderAgreePayment = ({
  handleIsWholeAgreement,
  handleIsPersonalInfo,
  handleOrderForm,
  handleIsPaymentConfirm,
  isWholeAgreement,
  isPersonalInfo,
  isPaymentConfirm,
}) => {
  return (
    <>
      <div>
        <SubTitle>동의 및 결제</SubTitle>
        <div>
          <label htmlFor="">
            <input type="checkbox" checked={isWholeAgreement} onChange={handleIsWholeAgreement} />
            전체 동의
          </label>
          <div>
            <label htmlFor="checkbox-info">
              <input
                id="checkbox-info"
                type="checkbox"
                checked={isPersonalInfo}
                onChange={handleIsPersonalInfo}
              />
              <span>개인정보 수집 및 이용 동의</span>
            </label>
            <span style={{ color: 'green' }}>약관 보기</span>
            <label htmlFor="checkbox-confirm">
              <input
                id="checkbox-confirm"
                type="checkbox"
                checked={isPaymentConfirm}
                onChange={handleIsPaymentConfirm}
              />
              <span>구매 조건 확인 및 결제 진행에 동의</span>
            </label>
          </div>
        </div>
      </div>
      <button onClick={handleOrderForm}>결제하기</button>
    </>
  );
};

export default OrderAgreePayment;
