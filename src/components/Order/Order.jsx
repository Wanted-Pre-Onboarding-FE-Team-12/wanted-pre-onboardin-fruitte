import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useDaumPostcodePopup as usePostCode } from 'react-daum-postcode';
import { order } from '@state/state';
import OrderProductInfo from '@components/Order/OrderProductInfo';
import OrderSummary from '@components/Order/OrderSummary';
import Layout from '@layouts/index';
import { Container, Title, SubTitle } from './style';
// import styled from 'styled-components';

/**
 * useRecoilState hook을 사용하여 컴포넌트에서 atom을 읽고 쓴다.
 * (React의 useState와 비슷하지만 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있음)
 *
 * 컴포넌트가 atom의 항목을 읽고/쓰기 -> useRecoilState
 * 컴포넌트가 atom의 항목을 읽기만 -> useRecoilValue
 */

/**
 * 1. 결제하기 페이지에서는 주문하려는 상품의 정보를 받아온다. (o)
 * 2. 주문자 정보에서 이름, 연락처, 이메일의 정보를 입력받는다. (o)
 * 3. 배송 정보에서 배송 정보를 입력받는다. (o)
 * 4. 주문 요약에서는 1의 정보를 요약해준다. (o)
 * 5. 결제수단은 신용카드 무통장 입금을 선택할 수 있다.
 *  5-1. 무통장 입금 클릭시 입금자명 입력 받아야 한다. (미 입력시 주문자 명)
 *  5-2. 현금 영수증 신청 체크박스 클릭 시
 *   5-2-1. 소득 공제용/지출 증빙용에 따라 입력 받는 값 저장
 * 6. 결제 전체 동의 박스에서 약관 보기 클릭 시 모달로 약관 보여주기
 *
 * 결제하기 버튼을 누르면 결제 정보를 state로 저장해야 된다.
 *  상품명
 *  수량, 갯수
 *  가격
 *  배송비 정보
 *  주문자 정보
 *    이름, 연락처, 이메일?
 *  배송 정보
 *  결제 수단
 */

/**
 * 주문자 정보
 * 이름, 연락처 입력시 각각 onChange event -> state 업데이트
 * 배송정보에서 주문자 정보와 동일 체크박스 클릭 시 이름, 연락처 값을 수령인 연락처에 넣어주기
 */

// scriptUrl: kakao 우편번호 서비스의 스크립트 주소
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
      // 사용자 직접 입력일 경우, 입력한 input 값 업데이트 필요
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
  const handleClick = useCallback(() => handleFindZipCode({ onComplete: handleComplete }), []);

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

  // loading true -> false로 css 깨지는 것 없애기
  /* useEffect(() => {
  },[]) */

  // 필수 입력값 공백인지 체크 -> 다 통과할 때 상태 저장
  const handleOrderForm = e => {
    if (
      name !== '' &&
      contactNumber !== '' &&
      orderPerson !== '' &&
      orderContactNumber !== '' &&
      zipCode !== '' &&
      address !== '' &&
      extraAddress !== '' &&
      orderMessage !== ''
    ) {
      console.log(
        name,
        contactNumber,
        orderPerson,
        orderContactNumber,
        zipCode,
        address,
        extraAddress,
        orderMessage,
      );
    }
  };

  return (
    <Layout>
      <Container>
        <div>
          <Title>결제 페이지</Title>
          <OrderProductInfo orderInfo={orderInfo} />
          {/** 주문자 정보 */}
          <div>
            <SubTitle>주문자 정보</SubTitle>
            <div>
              <label htmlFor="user-name">이름</label>
              <input
                type="text"
                required
                id="user-name"
                onChange={handleUpdateName}
                value={name ?? ''}
              />
              <label htmlFor="user-tel">연락처</label>
              <input
                type="tel"
                required
                id="user-tel"
                onChange={handleUpdateContactNumber}
                value={contactNumber ?? ''}
              />
            </div>
            <div>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" onChange={handleUpdateEmail} value={email ?? ''} />
            </div>
          </div>
          {/** 배송 정보 */}
          <div>
            <SubTitle>배송 정보</SubTitle>
            <div>
              <input type="checkbox" id="address-check" onChange={handleUpdateSameOrderPerson} />
              <label htmlFor="address-check">주문자 정보와 동일</label>
            </div>
            <div>
              <label htmlFor="recipient-name">수령인</label>
              <input
                type="text"
                required
                id="recipient-name"
                value={orderPerson ?? ''}
                onChange={handleOrderInfo}
              />
              <label htmlFor="recipient-tel">연락처</label>
              <input
                type="tel"
                required
                id="recipient-tel"
                value={orderContactNumber ?? ''}
                onChange={handleOrderInfo}
              />
            </div>
            <div>
              <div onClick={handleClick}>
                <input
                  type="text"
                  placeholder="우편번호"
                  value={zipCode ?? ''}
                  style={{ width: '200px' }}
                  readOnly
                />
                <button type="button">주소 찾기</button>
              </div>
              <div>
                <div onClick={handleClick}>
                  <input
                    type="text"
                    placeholder="주소"
                    value={address ?? ''}
                    style={{ width: '200px' }}
                    readOnly
                  />
                </div>
                <input
                  type="text"
                  placeholder="상세 주소"
                  onChange={handleUpdateExtraAddress}
                  value={extraAddress ?? ''}
                  style={{ width: '200px' }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message-select">배송 메모</label>
              <div>
                <select name="messages" id="message-select" onChange={handleUpdateOrderMessage}>
                  <option value="">-- 배송메모를 선택해 주세요 :) --</option>
                  <option value="배송 전에 미리 연락 바랍니다.">
                    배송 전에 미리 연락 바랍니다.
                  </option>
                  <option value="부재시 경비실에 맡겨주세요.">부재시 경비실에 맡겨주세요.</option>
                  <option value="부재시 전화나 문자를 남겨주세요.">
                    부재시 전화나 문자를 남겨주세요.
                  </option>
                  <option value="custom">직접 입력</option>
                </select>
              </div>
            </div>
            {orderMessage === 'custom' && (
              <input
                type="text"
                placeholder="배송메모를 입력해 주세요."
                value={orderUserMessage}
                onChange={handleUpdateOrderUserMessage}
              />
            )}
          </div>
        </div>
        <div>
          {/** 주문 요약 */}
          <OrderSummary orderInfo={orderInfo} />
          {/** 결제 수단 */}
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
                          cashReceipt === 'incomeDeduction'
                            ? '휴대전화번호 입력'
                            : '사업자번호 입력'
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
          {/** 결제 동의|결제 하기 */}
          <div>
            <SubTitle>동의 및 결제</SubTitle>
            <div>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={isWholeAgreement}
                  onChange={handleIsWholeAgreement}
                />
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
        </div>
      </Container>
    </Layout>
  );
};

export default Order;
