import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
