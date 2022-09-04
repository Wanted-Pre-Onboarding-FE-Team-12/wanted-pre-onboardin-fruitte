import { atom, selector } from 'recoil';

export const productState = atom({
  key: 'product',
  default: [],
});

export const productSelector = selector({
  key: 'productSelector',
  get: ({ get }) => {
    return get(productState);
  },
  set: ({ set, get }, newProduct) => {
    return set(productState, newProduct);
  },
});
