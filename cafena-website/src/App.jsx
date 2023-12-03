import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ShopCart from "./pages/ShopCart";
import Faq from "./pages/Faq";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />}>
            </Route>
              <Route path="/shop/:id" element={<Shop />} />
              <Route path="/shopCart" element={<ShopCart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/faq" element={<Faq />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
