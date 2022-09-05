import { atom } from 'recoil';

export const order = atom({
  key: 'order',
  default: [
    {
      id: 1,
      name: '아기 과자, 동결건조 사과칩 50g (5봉지, 10봉지 묶음 상품)',
      essential: true,
      unit: '10',
      quantity: 1,
      price: 65000,
      deliveryCharge: 0,
      imgUrl: 'https://cdn.imweb.me/thumbnail/20220714/802daf8483428.jpeg',
    },
  ],
});

export const productOptionSelectState = atom({
  key: 'productOptionSelectState',
  default: [],
});
