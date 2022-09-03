import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { useEffect } from 'react';
=======
>>>>>>> 799f941 (PR 피드백 수정)
import Admin from '@pages/Admin';
import List from '@pages/List';
import AdminProduct from '@pages/AdminProduct';
import AddProduct from '@pages/AddProduct';
<<<<<<< HEAD
import { useRecoilState } from 'recoil';
import { productState } from 'src/store/store';
import OrderConfirm from '@components/OrderConfirm';
=======
import OrderConfirm from '@pages/OrderConfirm';
>>>>>>> 799f941 (PR 피드백 수정)

function App() {
  const [, setProduct] = useRecoilState(productState);

  useEffect(() => {
    const fetchingData = async () => {
      const result = await fetch('/data/product.json');
      const promise = result.json();
      promise.then(res => setProduct(res));
    };
    fetchingData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/orderconfirm" element={<OrderConfirm />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="management" element={<AdminProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
