import React from 'react';
import { useRecoilState } from 'recoil';
import { productState } from 'src/store/store';

const TITLES = [
  { name: '상품번호', width: '50px' },
  { name: '상품명', width: '250px' },
  { name: '상품가격', width: '50px' },
];

const ProductMg = () => {
  const [product, setProduct] = useRecoilState(productState);

  const deleteProduct = id => {
    const newProducts = [...product];
    const result = newProducts.filter(item => item.id !== id);
    setProduct(result);
  };

  const setVisibleProduct = id => {
    const newProducts = [...product];
    console.log(newProducts);
    const result = newProducts.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        newItem.is_visible = !newItem.is_visible;
      }
      return newItem;
    });
    setProduct(result);
  };
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {TITLES.map((item, index) => (
          <div key={index} style={{ width: item.width }}>
            {item.name}
          </div>
        ))}
      </div>
      {product?.map(item => {
        return (
          <div key={item.id} style={{ display: 'flex', marginBottom: '5px' }}>
            <div style={{ width: '50px' }}>{item.id}</div>
            <div style={{ width: '250px' }}>{item.name}</div>
            <div style={{ width: '50px' }}>{item.price}</div>
            <div>
              <button
                onClick={() => {
                  deleteProduct(item.id);
                }}
              >
                삭제
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setVisibleProduct(item.id);
                }}
              >
                {item.is_visible ? '숨기기' : '보이기'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductMg;
