import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from '@pages/Admin';
import List from '@pages/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
