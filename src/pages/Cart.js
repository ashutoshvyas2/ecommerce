// // src/pages/CartPage.js
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";

// export default function CartPage() {
//   const { cart, removeFromCart, clearCart } = useCart();

//   if (cart.length === 0) return <h2 style={{ padding: "30px" }}>Your cart is empty</h2>;

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div style={{ padding: "30px" }}>
//       <h1>Your Cart</h1>

//       {cart.map(item => (
//         <div key={item.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
//           <h3>{item.name} (x{item.qty})</h3>
//           <p>Price: ₹{item.price}</p>
//           <p>Total: ₹{item.price * item.qty}</p>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}

//       <hr />
//       <h2>Total: ₹{total}</h2>

//       <button onClick={clearCart} style={{ marginRight: "15px" }}>Clear Cart</button>

//       <Link to="/checkout">
//         <button style={{ marginTop: "20px" }}>Proceed to Checkout</button>
//       </Link>
//     </div>
//   );
// }

import React from 'react';
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import products from "../data/products"; // Import products to get images

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page-modern container">
        <h1 className="cart-title">Your Bag is Empty</h1>
        <Link to="/" style={{ textDecoration: 'none', textAlign: 'center', display: 'block', fontSize: '1.2rem' }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Helper to get product image from main products list
  const getProductImage = (id) => {
    const product = products.find(p => p.id === id);
    // Use the first image from the 'images' array, or the old 'image' field as fallback
    if (product && product.images && product.images.length > 0) {
      return product.images[0];
    }
    if (product && product.image) {
      return product.image;
    }
    // Fallback placeholder
    return `https://placehold.co/100x100/eee/ccc?text=Product`;
  };

  return (
    <div className="cart-page-modern container">
      <h1 className="cart-title">Your Bag</h1>

      <div className="cart-layout-modern">
        
        {/* Column 1: Cart Items */}
        <div className="cart-items-list-modern">
          {/* Item Headers (Desktop) */}
          <div className="cart-item-header-modern">
            <span style={{ gridColumn: 'span 2' }}>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {/* Cart Item Loop */}
          {cart.map(item => (
            <div key={item.id} className="cart-item-modern">
              
              {/* Product Details (Combined Image + Info) */}
              <div className="cart-item-details-modern" style={{ gridColumn: 'span 2' }}>
                <img src={getProductImage(item.id)} alt={item.name} />
                <div className="cart-item-info-modern">
                  <h3>{item.name}</h3>
                  {/* <p>Color: Black</p> */}
                  <button onClick={() => removeFromCart(item.id)} className="cart-remove-btn-modern">
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <p>₹{item.price.toFixed(2)}</p>

              {/* Quantity */}
              <div className="quantity-selector-cart">
                <button onClick={() => updateQuantity(item.id, item.qty - 1)} disabled={item.qty <= 0}>
                  -
                </button>
                <span>{item.qty}</span>
                <button onClick={() => updateQuantity(item.id, item.qty + 1)}>
                  +
                </button>
              </div>

              {/* Total */}
              <p style={{ fontWeight: '600' }}>₹{(item.price * item.qty).toFixed(2)}</p>

            </div>
          ))}
        </div>

        {/* Column 2: Order Summary */}
        <aside className="order-summary-modern">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
          
          <div className="summary-row">
            <span>Shipping</span>
            <strong>FREE</strong>
          </div>

          <div className="summary-row total summary-total">
            <span>Total</span>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
          
          <p style={{ fontSize: '0.8rem', color: '#666', margin: '1rem 0' }}>
            Taxes and shipping calculated at checkout.
          </p>

          <form className="promo-code-form">
            <label htmlFor="promo">Add promo code</label>
            <div className="promo-input-group">
              <input type="text" id="promo" placeholder="Enter code" />
              <button type="submit">→</button>
            </div>
          </form>

          <div className="cart-actions-modern">
            <Link to="/checkout" className="checkout-btn-modern">
              Proceed to Checkout
            </Link>
            <button 
              onClick={clearCart} 
              className="cart-remove-btn-modern" 
              style={{ width: '100%', marginTop: '1rem', fontSize: '1rem' }}
            >
              Clear Cart
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}

