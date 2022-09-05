import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDaumPostcodePopup as usePostCode } from 'react-daum-postcode';
import { productOptionSelectState } from '@state/state';
import OrderProductInfo from '@components/Order/OrderProductInfo';
import OrderPersonInfo from './OrderPersonInfo';
import OrderSummary from '@components/Order/OrderSummary';
import OrderPaymentInfo from './OrderPaymentInfo';
import OrderAgreePayment from './OrderAgreePayment';
import ShippingInfo from './ShippingInfo';
import Layout from '@layouts/index';
import { Container, LeftContainer, RightContainer, Title } from './style';

const ScriptUrl = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const Order = () => {
  const navigate = useNavigate();
  const data = useRecoilValue(productOptionSelectState);
  const orderedData = data.default[0];
  const [, setOrderFormDate] = useRecoilState(productOptionSelectState);
  /** 주문 관련 상태값 */
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isOrderSame, setIsOrderSame] = useState(false);
  /** 배송 관련 상태값 */
  const [orderPerson, setOrderPerson] = useState('');
  const [orderContactNumber, setOrderContactNumber] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [address, setAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const [orderMessage, setOrderMessage] = useState('');
  const [orderUserMessage, setUserOrderMessage] = useState('');
  /** 결제 관련 상태값 */
  const [paymentType, setPaymentType] = useState('creditCard');
  const [depositor, setDepositor] = useState('');
  const [isDeposit, setIsDeposit] = useState(false);
  const [cashReceipt, setCashReceipt] = useState('incomeDeduction');
  const [paymentNumber, setPaymentNumber] = useState('');
  /** 결제 상태값 */
  const [isWholeAgreement, setIsWholeAgreement] = useState(false);
  const [isPersonalInfo, setIsPersonalInfo] = useState(false);
  const [isPaymentConfirm, setIsPaymentConfirm] = useState(false);
  /** 약관 보기 상태값 */

  /**  주문자 이름 update 함수 */
  const handleUpdateName = useCallback(e => setName(e.target.value), []);

  /**  주문자 연락처 update 함수 */
  const handleUpdateContactNumber = useCallback(e => setContactNumber(e.target.value), []);

  /**  주문자 이메일 update 함수 */
  const handleUpdateEmail = useCallback(e => setEmail(e.target.value), []);

  /**  주문자 정보 동일 update 함수 */
  const handleUpdateSameOrderPerson = useCallback(
    () => setIsOrderSame(!isOrderSame),
    [isOrderSame],
  );

  /**  직접 배송 수령인, 연락처 넣는 경우 */
  const handleOrderInfo = useCallback(e => {
    const { id } = e.target;
    if (id === 'recipient-name') {
      setOrderPerson(e.target.value);
    } else if (id === 'recipient-tel') {
      setOrderContactNumber(e.target.value);
    }
  }, []);

  /**  우편번호 update 함수 */
  const handleUpdateZipCode = useCallback(code => setZipCode(code), []);

  /**  주소 update 함수 */
  const handleUpdateAddress = useCallback(address => setAddress(address), []);

  /**  상세주소 update 함수 */
  const handleUpdateExtraAddress = useCallback(e => setExtraAddress(e.target.value), []);

  /**  배송 메모 update 함수 */
  const handleUpdateOrderMessage = useCallback(e => {
    const orderMessageType = e.target.value;

    if (orderMessageType === 'custom') {
      setOrderMessage(orderMessageType);
    } else {
      setOrderMessage(orderMessageType);
    }
  }, []);

  /**  배송 메모 사용자 추가 update 함수 */
  const handleUpdateOrderUserMessage = useCallback(e => {
    const customMessage = e.target.value;
    setUserOrderMessage(customMessage);
  }, []);

  /**  결제수단 상태 update 함수 */
  const handleUpdatePaymentType = useCallback(e => setPaymentType(e.target.id), []);

  /**  무통장입금 - 입금자명 update 함수 */
  const handleUpdateDepositor = useCallback(e => setDepositor(e.target.value), []);

  /**  현금 영수증 신청 체크 update 함수 */
  const handleUpdateDeposit = useCallback(() => setIsDeposit(!isDeposit), [isDeposit]);

  /**  현금 영수증 신청 시 소득 공제용 | 지출 증빙용 선택 update 함수 */
  const handleUpdateCashReceipt = useCallback(e => setCashReceipt(e.target.id), []);

  /**  현금 영수증 신청 시 핸드폰 번호 | 사업자 번호 update 함수 */
  const handleUpdatePaymentNumber = useCallback(e => setPaymentNumber(e.target.value), []);

  /**  결제 전체 동의 update 함수 */
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

  /**  개인정보 수집, 이용 동의 update 함수 */
  const handleIsPersonalInfo = useCallback(() => {
    if (isPersonalInfo && isPaymentConfirm) {
      setIsWholeAgreement(false);
    } else if (isPaymentConfirm) {
      setIsWholeAgreement(true);
    }
    setIsPersonalInfo(!isPersonalInfo);
  }, [isPersonalInfo, isPaymentConfirm]);

  /**  구매 조건 확인, 결제 진행 동의 update 함수 */
  const handleIsPaymentConfirm = useCallback(() => {
    if (isPersonalInfo && isPaymentConfirm) {
      setIsWholeAgreement(false);
    } else if (isPersonalInfo) {
      setIsWholeAgreement(true);
    }
    setIsPaymentConfirm(!isPaymentConfirm);
  }, [isPaymentConfirm, isPersonalInfo]);

  const handleFindZipCode = usePostCode(ScriptUrl);

  const handleComplete = useCallback(data => {
    if (data) {
      let { zonecode, address, userSelectedType, roadAddress, jibunAddress } = data;
      handleUpdateZipCode(zonecode);
      if (address !== '' && userSelectedType === 'R') {
        handleUpdateAddress(roadAddress);
      } else if (address !== '' && userSelectedType === 'J') {
        handleUpdateAddress(jibunAddress);
      }
    }
  }, []);

  const handleAddressSearchClick = useCallback(
    () => handleFindZipCode({ onComplete: handleComplete }),
    [],
  );

  useEffect(() => {
    if (isOrderSame) {
      setOrderPerson(name);
      setOrderContactNumber(contactNumber);
    } else {
      setOrderPerson('');
      setOrderContactNumber('');
    }
  }, [isOrderSame]);

  /** 필수 입력값 공백인지 체크 -> 다 통과할 때 상태 저장 => 리코일에 저장하기 */
  const handleOrderForm = e => {
    const convertOrderMessage = orderMessage === 'custom' ? orderUserMessage : orderMessage;
    if (
      name !== '' &&
      contactNumber !== '' &&
      orderPerson !== '' &&
      orderContactNumber !== '' &&
      zipCode !== '' &&
      address !== '' &&
      extraAddress !== '' &&
      convertOrderMessage !== ''
    ) {
      setOrderFormDate([
        {
          id: 1,
          name,
          price: orderedData.price,
          delivery_info: [{ address: `${address} ${extraAddress}` }],
          sale_price: 7000,
          imgUrl: orderedData.imgUrl,
        },
      ]);
      handleOrderDetailPage();
    }
  };

  // 주문 완료 페이지 이동
  const handleOrderDetailPage = () => {
    navigate('/orderconfirm');
  };

  return (
    <Layout>
      <Title>결제 페이지</Title>
      <Container>
        <LeftContainer>
          <OrderProductInfo orderInfo={orderedData} />
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
        </LeftContainer>
        <RightContainer>
          {/** 주문 요약 */}
          <OrderSummary orderInfo={orderedData} />
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
        </RightContainer>
      </Container>
    </Layout>
  );
};

export default Order;
