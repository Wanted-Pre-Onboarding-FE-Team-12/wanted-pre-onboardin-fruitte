import { SubTitle } from './style';

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
    <div>
      <SubTitle>결제 수단</SubTitle>
      <div onClick={handleUpdatePaymentType}>
        <label htmlFor="creditCard">
          신용카드
          <input type="radio" name="payment" id="creditCard" defaultChecked />
        </label>
        <label htmlFor="cashDeposit">
          무통장 입금
          <input type="radio" name="payment" id="cashDeposit" />
        </label>
      </div>
      {paymentType === 'cashDeposit' && (
        <>
          <div>
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
          </div>
          <div onClick={handleUpdateDeposit}>
            <label htmlFor="">
              <input type="checkbox" value={isDeposit} />
              현금영수증 신청
            </label>
          </div>
          {isDeposit && (
            <>
              <div onClick={handleUpdateCashReceipt}>
                <label htmlFor="incomeDeduction">
                  <input type="radio" name="receipt" id="incomeDeduction" defaultChecked />
                  소득공제용
                </label>
                <label htmlFor="proofExpenditure">
                  <input type="radio" name="receipt" id="proofExpenditure" />
                  지출증빙용
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={
                    cashReceipt === 'incomeDeduction' ? '휴대전화번호 입력' : '사업자번호 입력'
                  }
                  value={paymentNumber ?? ''}
                  onChange={handleUpdatePaymentNumber}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default OrderPaymentInfo;
