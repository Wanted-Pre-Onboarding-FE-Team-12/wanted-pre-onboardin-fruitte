import { atom, selector } from 'recoil';

/**
 * 주문 1개에 대한 상태 값
 * atom: 컴포넌트가 구독할 수 있는 상태의 단위
 * selector: atom 상태값을 동기 or 비동기 방식을 통해 변환한다.
 */

// atom 함수를 사용해 1개의 주문 정보에 대한 Atoms 생성 -> 아직 상세페이지에서 값을 못 받아와서 임의로 만듦
export const order = atom({
  // Atoms는 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 키 필요
  key: 'order',
  default: [
    {
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

// selector를 이용해서 파생된 상태의 일부를 나타내고, 값을 읽을 것이다.
export const orderState = selector({
  key: 'orderState',
  get: ({ get }) => {
    const orderInfo = get(order);

    return orderInfo;
  },
});

// product.json에 있는 json 값 저장 (app에서 저장하는 것이 좋음)
/* export const state = atom({
  key: 'state',
  default: [],
}); */
