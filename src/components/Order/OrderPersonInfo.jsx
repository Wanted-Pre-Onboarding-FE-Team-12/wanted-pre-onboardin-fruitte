import { OrderContainer, SubTitle, OrderEssential, OrderOption } from './style';

const OrderPersonInfo = ({
  email,
  name,
  contactNumber,
  handleUpdateName,
  handleUpdateContactNumber,
  handleUpdateEmail,
}) => {
  return (
    <>
      <SubTitle>주문자 정보</SubTitle>
      <OrderContainer>
        <OrderEssential>
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
        </OrderEssential>
        <OrderOption>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일 (선택)"
            onChange={handleUpdateEmail}
            value={email ?? ''}
          />
        </OrderOption>
      </OrderContainer>
    </>
  );
};

export default OrderPersonInfo;
