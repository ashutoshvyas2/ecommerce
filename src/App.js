import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import CheckoutPage from "./pages/CheckoutPage";
import SupportPage from "./pages/SupportPage"; 
import { SearchProvider } from "./context/SearchContext"; 

function App() {
  return (
    <SearchProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;

