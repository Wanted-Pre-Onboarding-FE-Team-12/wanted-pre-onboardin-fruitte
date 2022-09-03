import { useRecoilValue } from 'recoil';
import { order } from '@state/state';
import OrderProductInfo from '@components/Order/OrderProductInfo';
import Layout from '@layouts/index';
import { Container, Title, SubTitle } from './style';

/**
 * useRecoilState hook을 사용하여 컴포넌트에서 atom을 읽고 쓴다.
 * (React의 useState와 비슷하지만 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있음)
 *
 * 컴포넌트가 atom의 항목을 읽고/쓰기 -> useRecoilState
 * 컴포넌트가 atom의 항목을 읽기만 -> useRecoilValue
 */

/**
 * 1. 결제하기 페이지에서는 주문하려는 상품의 정보를 받아온다.
 * 2. 주문자 정보에서 이름, 연락처, 이메일의 정보를 입력받는다.
 * 3. 배송 정보에서 배송 정보를 입력받는다.
 * 4. 주문 요약에서는 1의 정보를 요약해준다.
 * 5. 결제수단은 신용카드 무통장 입금을 선택할 수 있다.
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

const Order = () => {
  // 주문 상품 정보 저장
  const [orderInfo] = useRecoilValue(order); // setState 함수 우선 필요가 없어서 지움

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
              <input type="text" required id="user-name" />
              <label htmlFor="user-tel">연락처</label>
              <input type="tel" required id="user-tel" />
            </div>
            <div>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" />
            </div>
          </div>
          {/** 배송 정보 */}
          <div>
            <SubTitle>배송 정보</SubTitle>
            <div>
              <input type="checkbox" id="address-check" />
              <label htmlFor="address-check">주문자 정보와 동일</label>
            </div>
            <div>
              <label htmlFor="recipient-name">수령인</label>
              <input type="text" required id="recipient-name" />
              <label htmlFor="recipient-tel">연락처</label>
              <input type="tel" required id="recipient-tel" />
            </div>
            <div>
              <div>
                <input type="text" placeholder="우편번호" />
                <button>주소 찾기</button>
              </div>
              <div>
                <input type="text" placeholder="주소" />
                <input type="text" placeholder="상세 주소" />
              </div>
            </div>
            <div>
              <label for="message-select">배송 메모</label>
              <select name="messages" id="message-select">
                <option value="">-- 배송메모를 선택해 주세요 :) --</option>
                <option value="pre">배송 전에 미리 연락 바랍니다.</option>
                <option value="office">부재시 경비실에 맡겨주세요.</option>
                <option value="call">부재시 전화나 문자를 남겨주세요.</option>
                <option value="directInput">직접 입력</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          {/** 주문 요약 */}
          <div>
            <SubTitle>주문 요약</SubTitle>
            <p>
              <span>상품 가격</span>
              <span>{orderInfo.price}원</span>
            </p>
            <p>
              <span>배송비</span>
              <span>{orderInfo.deliveryCharge === 0 ? '무료' : orderInfo.deliveryCharge}원</span>
            </p>
            <hr />
            <p>
              <span>총 주문 금액</span>
              <span>{orderInfo.price}원</span>
            </p>
          </div>
          {/** 결제 수단 */}
          <div>
            <SubTitle>결제 수단</SubTitle>
            <fieldset>
              <div>
                <label htmlFor="creditCard">신용카드</label>
                <input type="radio" name="payment" id="creditCard" />
              </div>
              <div>
                <label htmlFor="cash">무통장 입금</label>
                <input type="radio" name="payment" id="cash" />
              </div>
            </fieldset>
          </div>
          {/** 결제 동의|결제 하기 */}
          <div>
            <SubTitle>동의 및 결제</SubTitle>
            <div>
              <input type="checkbox" />
              <span>전체 동의</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>
                개인정보 수집 및 이용 동의 <span style={{ color: 'green' }}>약관 보기</span>
              </span>
            </div>
            <div>
              <input type="checkbox" />
              <span>구매 조건 확인 및 결제 진행에 동의</span>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Order;
