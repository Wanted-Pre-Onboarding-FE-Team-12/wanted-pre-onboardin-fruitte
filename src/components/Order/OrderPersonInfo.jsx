import { SubTitle } from './style';

const OrderPersonInfo = ({
  email,
  name,
  contactNumber,
  handleUpdateName,
  handleUpdateContactNumber,
  handleUpdateEmail,
}) => {
  return (
    <div>
      <SubTitle>주문자 정보</SubTitle>
      <div>
        <label htmlFor="user-name">이름</label>
        <input type="text" required id="user-name" onChange={handleUpdateName} value={name ?? ''} />
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
  );
};

export default OrderPersonInfo;
