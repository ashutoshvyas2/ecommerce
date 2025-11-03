// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { CartProvider } from './context/CartContext';

// ReactDOM.render(
//   <CartProvider>
//     <App />
//   </CartProvider>,
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { CartProvider } from './context/CartContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <CartProvider>
//     <App />
//   </CartProvider>
// );


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router-dom";
// import App from "./App";
// import { CartProvider } from "./context/CartContext";
// import "./App.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <CartProvider>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </CartProvider>
// );


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { CartProvider } from "./context/CartContext";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <CartProvider>
//     <BrowserRouter basename="/react-ecommerce">
//       <App />
//     </BrowserRouter>
//   </CartProvider>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter basename="/ecommerce">
      <App />
    </BrowserRouter>
  </CartProvider>
);

