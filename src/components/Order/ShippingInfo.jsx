import {
  SubTitle,
  ShippingInfoContainer,
  OrderCheckBox,
  OrderRecipient,
  AddressBox,
  MessageBox,
  SelectBox,
  CustomInput,
} from './style';

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
    <>
      <SubTitle>배송 정보</SubTitle>
      <ShippingInfoContainer>
        <OrderCheckBox>
          <input type="checkbox" id="address-check" onChange={handleUpdateSameOrderPerson} />
          <label htmlFor="address-check">주문자 정보와 동일</label>
        </OrderCheckBox>
        <OrderRecipient>
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
        </OrderRecipient>
        <AddressBox>
          <div onClick={handleAddressSearchClick}>
            <input
              type="text"
              placeholder="우편번호"
              id="add-code"
              value={zipCode ?? ''}
              readOnly
            />
            <button type="button">주소 찾기</button>
          </div>
          <div onClick={handleAddressSearchClick}>
            <input
              type="text"
              id="order-address"
              placeholder="주소"
              value={address ?? ''}
              readOnly
            />
          </div>
          <div>
            <input
              type="text"
              id="order-extra-address"
              placeholder="상세 주소"
              onChange={handleUpdateExtraAddress}
              value={extraAddress ?? ''}
            />
          </div>
        </AddressBox>
        <MessageBox>
          <label htmlFor="message-select">배송 메모</label>
          <SelectBox>
            <select name="messages" id="message-select" onChange={handleUpdateOrderMessage}>
              <option value="">-- 배송메모를 선택해 주세요 :) --</option>
              <option value="배송 전에 미리 연락 바랍니다.">배송 전에 미리 연락 바랍니다.</option>
              <option value="부재시 경비실에 맡겨주세요.">부재시 경비실에 맡겨주세요.</option>
              <option value="부재시 전화나 문자를 남겨주세요.">
                부재시 전화나 문자를 남겨주세요.
              </option>
              <option value="custom">직접 입력</option>
            </select>
          </SelectBox>
        </MessageBox>
        {orderMessage === 'custom' && (
          <CustomInput
            type="text"
            placeholder="배송메모를 입력해 주세요."
            value={orderUserMessage}
            onChange={handleUpdateOrderUserMessage}
          />
        )}
      </ShippingInfoContainer>
    </>
  );
};

export default ShippingInfo;
