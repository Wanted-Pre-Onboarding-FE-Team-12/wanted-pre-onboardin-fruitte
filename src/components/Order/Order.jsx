import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useDaumPostcodePopup as usePostCode } from 'react-daum-postcode';
import { order } from '@state/state';
import OrderProductInfo from '@components/Order/OrderProductInfo';
import OrderSummary from '@components/Order/OrderSummary';
import Layout from '@layouts/index';
import { Container, Title, SubTitle } from './style';
const ScriptUrl = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const checkBoxList = [
  {
    id: 1,
    title: '개인정보 수집 및 이용 동의 약관 보기',
  },
  {
    id: 2,
    title: '구매 조건 확인 및 결제 진행에 동의',
  },
];

const Order = () => {
  // 주문 상품 정보 저장
  const [orderInfo] = useRecoilValue(order);
  // 주문자 이름 정보 상태값
  const [name, setName] = useState('');
  // 주문자 연락처 상태값
  const [contactNumber, setContactNumber] = useState(null);
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

  // 체크된 결제 정보들을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = checked => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      checkBoxList.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

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
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    name="select-all"
                    onChange={e => handleAllCheck(e.target.checked)}
                    checked={checkItems.length === checkBoxList.length ? true : false}
                  />
                </th>
                <th className="second-row">전체 동의</th>
              </tr>
            </thead>
            <tbody>
              {checkBoxList?.map((data, key) => (
                <tr key={key}>
                  <td>
                    <input
                      type="checkbox"
                      name={`select-${data.id}`}
                      onChange={e => handleSingleCheck(e.target.checked, data.id)}
                      checked={checkItems.includes(data.id) ? true : false}
                    />
                  </td>
                  <td className="second-row">{data.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>결제하기</button>
        </div>
      </Container>
    </Layout>
  );
};

export default Order;
