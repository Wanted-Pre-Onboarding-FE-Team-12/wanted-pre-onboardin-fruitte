import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from '@pages/Admin';
import List from '@pages/List';
import ProductMg from '@pages/ProductMg';
import AddProduct from '@pages/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="management" element={<ProductMg />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
