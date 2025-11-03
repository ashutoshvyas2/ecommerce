// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductPage from "./pages/ProductPage";
// import Cart from "./pages/Cart";
// import Navbar from "./components/Navbar";
// import CheckoutPage from "./pages/CheckoutPage";

// // IMPORT THE CONTEXT PROVIDERS HERE
// import { CartProvider } from "./context/CartContext";
// import { SearchProvider } from "./context/SearchContext"; 

// function App() {
//   // NOTE: If you are using `BrowserRouter` in `src/index.js`, 
//   // you do not need it here. We are focusing on wrapping the components 
//   // that rely on the context.
//   return (
//     // Wrap the entire application structure with the necessary Providers.
//     // The components (Navbar, Home) must be INSIDE the providers to access the context.
//     <CartProvider>
//       <SearchProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/product/:id" element={<ProductPage />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//         </Routes>
//       </SearchProvider>
//     </CartProvider>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import CheckoutPage from "./pages/CheckoutPage";
// 1. IMPORT THE NEW SUPPORT PAGE
import SupportPage from "./pages/SupportPage"; 

// IMPORT THE CONTEXT PROVIDERS HERE
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext"; 

function App() {
  // NOTE: If you are using `BrowserRouter` in `src/index.js`, 
  // you do not need it here. We are focusing on wrapping the components 
  // that rely on the context.
  return (
    // Wrap the entire application structure with the necessary Providers.
    // The components (Navbar, Home) must be INSIDE the providers to access the context.
    <CartProvider>
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* 2. ADD THE ROUTE FOR THE SUPPORT PAGE */}
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;

