import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from '@pages/Admin';
import List from '@pages/List';
import Order from '@components/Order/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<List />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
