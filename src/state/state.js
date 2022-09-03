import { atom, selector } from 'recoil';
// 전체 상태값 ->

export const orderState = atom({
  key: 'state',
  default: [],
});

export const counterLabelSelector = selector({
  key: 'counterLabelSelector',
  get: ({ get }) => {
    const order = get(orderState);
    return `현재 주문 값은 ${order} 입니다.`;
  },
});
