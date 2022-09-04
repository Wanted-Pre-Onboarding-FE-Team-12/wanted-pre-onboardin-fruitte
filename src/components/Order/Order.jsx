import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useDaumPostcodePopup as usePostCode } from 'react-daum-postcode';
import { order } from '@state/state';
import OrderProductInfo from '@components/Order/OrderProductInfo';
import OrderPersonInfo from './OrderPersonInfo';
import OrderSummary from '@components/Order/OrderSummary';
import OrderPaymentInfo from './OrderPaymentInfo';
import OrderAgreePayment from './OrderAgreePayment';
import ShippingInfo from './ShippingInfo';
import Layout from '@layouts/index';
import { Container, Title } from './style';

const ScriptUrl = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const Order = () => {
  // 주문 상품 정보 저장
  const [orderInfo] = useRecoilValue(order);

  // 주문자 이름 정보 상태값
  const [name, setName] = useState('');
  // 주문자 연락처 상태값
  const [contactNumber, setContactNumber] = useState('');
  // 주문자 이메일 상태값
  const [email, setEmail] = useState('');
  // 주문자 정보 동일 상태값
  const [isOrderSame, setIsOrderSame] = useState(false);
  // 배송 수령인 상태값
  const [orderPerson, setOrderPerson] = useState('');
  // 배송 연락처 상태값
  const [orderContactNumber, setOrderContactNumber] = useState(null);
  // 우편번호 상태값
  const [zipCode, setZipCode] = useState(null);
  // 주소 상태값
  const [address, setAddress] = useState('');
  // 상세주소 상태값
  const [extraAddress, setExtraAddress] = useState('');
  // 배송 메모 상태값
  const [orderMessage, setOrderMessage] = useState('');
  // 배송 메모 사용자 추가 상태값
  const [orderUserMessage, setUserOrderMessage] = useState('');
  // 결제 수단 상태값 (신용카드, 무통장입금)
  const [paymentType, setPaymentType] = useState('creditCard'); // 무통장 입금 cashDeposit
  // 무통장 입금 선택 시 입금자명 상태값
  const [depositor, setDepositor] = useState(''); // 미입력시 주문자명
  // 현금 영수증 신청 상태값
  const [isDeposit, setIsDeposit] = useState(false);
  // 소득 공제 | 지출 증빙 여부 상태값
  const [cashReceipt, setCashReceipt] = useState('incomeDeduction'); // 지출증빙 proofExpenditure
  // 소득 공제 | 지출 증빙 선택 시 휴대전화 번호 | 사업자 번호
  const [paymentNumber, setPaymentNumber] = useState('');
  // 동의 및 결제 전체 동의 상태값
  const [isWholeAgreement, setIsWholeAgreement] = useState(false);
  // // 개인정보 수집, 동의 상태값
  const [isPersonalInfo, setIsPersonalInfo] = useState(false);
  // // 구매조건 확인, 결제 진행 동의 상태값
  const [isPaymentConfirm, setIsPaymentConfirm] = useState(false);
  // // 약관 보기 상태값
  // const [isTermsCondition, setIsTermsCondition] = useState(false);

  // 주문자 이름 update 함수
  const handleUpdateName = useCallback(e => setName(e.target.value), []);

  // 주문자 연락처 update 함수
  const handleUpdateContactNumber = useCallback(e => setContactNumber(e.target.value), []);

  // 주문자 이메일 update 함수
  const handleUpdateEmail = useCallback(e => setEmail(e.target.value), []);

  // 주문자 정보 동일 update 함수
  const handleUpdateSameOrderPerson = useCallback(
    () => setIsOrderSame(!isOrderSame),
    [isOrderSame],
  );

  // 직접 배송 수령인, 연락처 넣는 경우
  const handleOrderInfo = useCallback(e => {
    const { id } = e.target;
    if (id === 'recipient-name') {
      setOrderPerson(e.target.value);
    } else if (id === 'recipient-tel') {
      setOrderContactNumber(e.target.value);
    }
  }, []);

  // 우편번호 update 함수
  const handleUpdateZipCode = useCallback(code => setZipCode(code), []);

  // 주소 update 함수
  const handleUpdateAddress = useCallback(address => setAddress(address), []);

  // 상세주소 update 함수
  const handleUpdateExtraAddress = useCallback(e => setExtraAddress(e.target.value), []);

  // 배송 메모 update 함수
  const handleUpdateOrderMessage = useCallback(e => {
    const orderMessageType = e.target.value;

    // 선택한 option 값 orderType에 업데이트
    if (orderMessageType === 'custom') {
      // 사용자 직접 입력일 경우, 입력한 input 값 업데이트 필요 -> orderUserMessage에
      setOrderMessage(orderMessageType);
    } else {
      setOrderMessage(orderMessageType);
    }
  }, []);

  // 배송 메모 사용자 추가 update 함수
  const handleUpdateOrderUserMessage = useCallback(e => {
    const customMessage = e.target.value;
    setUserOrderMessage(customMessage);
  }, []);

  // 결제수단 상태 update 함수
  const handleUpdatePaymentType = useCallback(e => setPaymentType(e.target.id), []);

  // 무통장입금 - 입금자명 update 함수
  const handleUpdateDepositor = useCallback(e => setDepositor(e.target.value), []);

  // 현금 영수증 신청 체크 update 함수
  const handleUpdateDeposit = useCallback(() => setIsDeposit(!isDeposit), [isDeposit]);

  // 현금 영수증 신청 시 소득 공제용 | 지출 증빙용 선택 update 함수
  const handleUpdateCashReceipt = useCallback(e => setCashReceipt(e.target.id), []);

  // 현금 영수증 신청 시 핸드폰 번호 | 사업자 번호 update 함수
  const handleUpdatePaymentNumber = useCallback(e => setPaymentNumber(e.target.value), []);

  // 결제 전체 동의 update 함수
  const handleIsWholeAgreement = useCallback(() => {
    if (isWholeAgreement) {
      setIsPersonalInfo(false);
      setIsPaymentConfirm(false);
    } else {
      setIsPersonalInfo(true);
      setIsPaymentConfirm(true);
    }
    setIsWholeAgreement(!isWholeAgreement);
  }, [isWholeAgreement]);

  // 개인정보 수집, 이용 동의 update 함수
  const handleIsPersonalInfo = useCallback(() => {
    if (isPersonalInfo && isPaymentConfirm) {
      setIsWholeAgreement(false);
    } else if (isPaymentConfirm) {
      setIsWholeAgreement(true);
    }
    setIsPersonalInfo(!isPersonalInfo);
  }, [isPersonalInfo, isPaymentConfirm]);

  // 구매 조건 확인, 결제 진행 동의 update 함수
  const handleIsPaymentConfirm = useCallback(() => {
    if (isPersonalInfo && isPaymentConfirm) {
      setIsWholeAgreement(false);
    } else if (isPersonalInfo) {
      setIsWholeAgreement(true);
    }
    setIsPaymentConfirm(!isPaymentConfirm);
  }, [isPaymentConfirm, isPersonalInfo]);

  /**
   * address service 추가
   * 필요한 값: 우편번호, 주소, 상세 주소
   *
   * zonecode: 우편번호
   * address: 기본 주소(검색 결과의 첫 줄에 나오는 주소, 지번 입력-> 첫 줄, 도로명 입력 -> 첫 줄) / 내가 검색한 주소 그대로
   * addressType: 검색한 주소 스타일, R(도로명), J(지번)
   * userSelectedType: R/J 검색 결과에서 사용자가 선택한 주소의 타입(결과 중 선택한 주소 스타일)
   * roadAddress: 도로명 주소
   * jibunAddress: 지번 주소
   *
   * bname: 법정동/법정리 이름
   * buildingName: 건물명
   */

  // api script 주소 넣어서 함수 가져오기
  const handleFindZipCode = usePostCode(ScriptUrl);

  const handleComplete = useCallback(data => {
    // data가 있다면
    if (data) {
      // data에서 필요한 값들 가져오기
      let { zonecode, address, userSelectedType, roadAddress, jibunAddress } = data;

      // 우편 번호 update
      handleUpdateZipCode(zonecode);

      // 주소 update
      // 검색한 주소가 있고 결과 중 선택한 주소가 도로명 주소 일 때 | 지번 일 때
      if (address !== '' && userSelectedType === 'R') {
        handleUpdateAddress(roadAddress);
      } else if (address !== '' && userSelectedType === 'J') {
        handleUpdateAddress(jibunAddress);
      }
    }
  }, []);

  // 주소 검색 서비스 함수
  const handleAddressSearchClick = useCallback(
    () => handleFindZipCode({ onComplete: handleComplete }),
    [],
  );

  // 주문자 정보 동일 여부에 따라 배송 정보 수령인/연락처 핸들링하는 함수
  useEffect(() => {
    // orderSame이 true이면 동일
    if (isOrderSame) {
      setOrderPerson(name);
      setOrderContactNumber(contactNumber);
    }
    // orderSame이 false이면 다른 것
    else {
      setOrderPerson('');
      setOrderContactNumber('');
    }
  }, [isOrderSame]);

  // 필수 입력값 공백인지 체크 -> 다 통과할 때 상태 저장 => 리코일에 저장하기
  const handleOrderForm = e => {};

  return (
    <Layout>
      <Container>
        <div>
          <Title>결제 페이지</Title>
          <OrderProductInfo orderInfo={orderInfo} />
          {/** 주문자 정보 */}
          <OrderPersonInfo
            handleUpdateName={handleUpdateName}
            handleUpdateContactNumber={handleUpdateContactNumber}
            handleUpdateEmail={handleUpdateEmail}
            email={email}
            name={name}
            contactNumber={contactNumber}
          />
          {/** 배송 정보 */}
          <ShippingInfo
            handleUpdateSameOrderPerson={handleUpdateSameOrderPerson}
            handleOrderInfo={handleOrderInfo}
            handleUpdateExtraAddress={handleUpdateExtraAddress}
            handleUpdateOrderMessage={handleUpdateOrderMessage}
            handleUpdateOrderUserMessage={handleUpdateOrderUserMessage}
            handleAddressSearchClick={handleAddressSearchClick}
            orderMessage={orderMessage}
            orderUserMessage={orderUserMessage}
            orderPerson={orderPerson}
            orderContactNumber={orderContactNumber}
            zipCode={zipCode}
            address={address}
            extraAddress={extraAddress}
          />
        </div>
        <div>
          {/** 주문 요약 */}
          <OrderSummary orderInfo={orderInfo} />
          {/** 결제 수단 */}
          <OrderPaymentInfo
            handleUpdatePaymentType={handleUpdatePaymentType}
            handleUpdateDepositor={handleUpdateDepositor}
            handleUpdateDeposit={handleUpdateDeposit}
            handleUpdateCashReceipt={handleUpdateCashReceipt}
            handleUpdatePaymentNumber={handleUpdatePaymentNumber}
            paymentType={paymentType}
            depositor={depositor}
            cashReceipt={cashReceipt}
            paymentNumber={paymentNumber}
            isDeposit={isDeposit}
          />
          {/** 결제 동의 | 결제 하기 */}
          <OrderAgreePayment
            handleIsWholeAgreement={handleIsWholeAgreement}
            handleIsPersonalInfo={handleIsPersonalInfo}
            handleOrderForm={handleOrderForm}
            handleIsPaymentConfirm={handleIsPaymentConfirm}
            isWholeAgreement={isWholeAgreement}
            isPersonalInfo={isPersonalInfo}
            isPaymentConfirm={isPaymentConfirm}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default Order;
