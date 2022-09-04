import {
  PayContainer,
  SubTitle,
  PayChoice,
  PayTypeCashBox,
  PayReceipt,
  Line,
  PayReceiptCheckBox,
  PayReceiptBox,
} from './style';

const OrderPaymentInfo = ({
  handleUpdatePaymentType,
  handleUpdateDepositor,
  handleUpdateDeposit,
  handleUpdateCashReceipt,
  handleUpdatePaymentNumber,
  paymentType,
  depositor,
  cashReceipt,
  paymentNumber,
  isDeposit,
}) => {
  return (
    <>
      <SubTitle>결제 수단</SubTitle>
      <PayContainer>
        <PayChoice onClick={handleUpdatePaymentType}>
          <label htmlFor="creditCard">
            <input type="radio" name="payment" id="creditCard" defaultChecked />
            신용카드
          </label>
          <label htmlFor="cashDeposit">
            <input type="radio" name="payment" id="cashDeposit" />
            무통장 입금
          </label>
        </PayChoice>
        {paymentType === 'cashDeposit' && (
          <>
            <PayTypeCashBox>
              <div>
                <span>입금 은행</span>
                <p>국민은행 527837-01-004676 주식회사 로컬앤라이프</p>
              </div>
              <div>
                <label htmlFor="depositorName">
                  <input
                    type="text"
                    placeholder="입금자명 (미입력시 주문자명)"
                    value={depositor}
                    onChange={handleUpdateDepositor}
                  />
                </label>
                <p>주문 후 72시간 동안 미입금시 자동 취소됩니다.</p>
              </div>
            </PayTypeCashBox>
            <Line />
            <PayReceiptCheckBox onClick={handleUpdateDeposit}>
              <label htmlFor="">
                <input type="checkbox" value={isDeposit} />
                현금영수증 신청
              </label>
            </PayReceiptCheckBox>
            {isDeposit && (
              <>
                <PayReceipt onClick={handleUpdateCashReceipt}>
                  <label htmlFor="incomeDeduction">
                    <input type="radio" name="receipt" id="incomeDeduction" defaultChecked />
                    소득공제용
                  </label>
                  <label htmlFor="proofExpenditure">
                    <input type="radio" name="receipt" id="proofExpenditure" />
                    지출증빙용
                  </label>
                </PayReceipt>
                <PayReceiptBox>
                  <input
                    type="text"
                    placeholder={
                      cashReceipt === 'incomeDeduction' ? '휴대전화번호 입력' : '사업자번호 입력'
                    }
                    value={paymentNumber ?? ''}
                    onChange={handleUpdatePaymentNumber}
                  />
                </PayReceiptBox>
              </>
            )}
          </>
        )}
      </PayContainer>
    </>
  );
};

export default OrderPaymentInfo;
