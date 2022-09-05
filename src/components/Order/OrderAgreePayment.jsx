import { AgreeContainer, CheckBox, SubTitle, PayButton } from './style';

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
      <SubTitle>동의 및 결제</SubTitle>
      <AgreeContainer>
        <div>
          <CheckBox>
            <label htmlFor="">
              <input type="checkbox" checked={isWholeAgreement} onChange={handleIsWholeAgreement} />
              전체 동의
            </label>
          </CheckBox>
          <CheckBox>
            <label htmlFor="checkbox-info">
              <input
                id="checkbox-info"
                type="checkbox"
                checked={isPersonalInfo}
                onChange={handleIsPersonalInfo}
              />
              <span>개인정보 수집 및 이용 동의</span>
              <span style={{ color: 'green' }}>약관 보기</span>
            </label>
          </CheckBox>
          <CheckBox>
            <label htmlFor="checkbox-confirm">
              <input
                id="checkbox-confirm"
                type="checkbox"
                checked={isPaymentConfirm}
                onChange={handleIsPaymentConfirm}
              />
              <span>구매 조건 확인 및 결제 진행에 동의</span>
            </label>
          </CheckBox>
        </div>
      </AgreeContainer>
      <PayButton onClick={handleOrderForm}>결제하기</PayButton>
    </>
  );
};

export default OrderAgreePayment;
