import Home from "./pages/Home/Home";
import Detail from "./pages/detail/Detail";
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="petshops/:type" element={<Home />} />
          <Route path="petshop/:id" element={<Detail />} />
          <Route path="/*" element={<h1>Error Page</h1>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}


