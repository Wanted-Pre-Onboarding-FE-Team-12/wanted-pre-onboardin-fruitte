import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Admin from '@pages/Admin';
import List from '@pages/List';
import AdminProduct from '@pages/AdminProduct';
import AddProduct from '@pages/AddProduct';
import { useRecoilState } from 'recoil';
import { productState } from 'src/store/store';
import ProductDetail from '@components/ProductDetail';

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
        <Route path="/detail/*" element={<ProductDetail/>} />
        <Route path="/admin" element={<Admin />}>
          <Route path="management" element={<AdminProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
