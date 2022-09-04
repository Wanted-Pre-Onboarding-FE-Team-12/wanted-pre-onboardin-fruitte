import { SubTitle } from './style';

const ShippingInfo = ({
  handleUpdateSameOrderPerson,
  handleOrderInfo,
  handleUpdateExtraAddress,
  handleUpdateOrderMessage,
  handleUpdateOrderUserMessage,
  handleAddressSearchClick,
  orderMessage,
  orderUserMessage,
  orderPerson,
  orderContactNumber,
  zipCode,
  address,
  extraAddress,
}) => {
  return (
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
        <div onClick={handleAddressSearchClick}>
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
          <div onClick={handleAddressSearchClick}>
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
            <option value="배송 전에 미리 연락 바랍니다.">배송 전에 미리 연락 바랍니다.</option>
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
  );
};

export default ShippingInfo;
