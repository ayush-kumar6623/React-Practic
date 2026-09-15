import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProductCard from "./Pages/Product";

const Shop = () => {
  return (
    <>
      <Header />
      <ProductCard />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<Shop />} />
        <Route path="/new-arrivals" element={<Shop />} />
        <Route path="/deals" element={<Shop />} />
        <Route path="/contact" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;