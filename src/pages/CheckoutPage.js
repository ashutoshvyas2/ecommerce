


// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; 
// import { useState } from "react";

// // Placeholder for estimated arrival date (e.g., Today + 7 days)
// const getArrivalDate = () => {
//   const date = new Date();
//   date.setDate(date.getDate() + 7);
//   return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
// };

// export default function CheckoutPage() {
//   const { cart } = useCart();
//   const [deliveryOption, setDeliveryOption] = useState('Home/Office');
  
//   if (cart.length === 0) {
//     return (
//       <div className="checkout-page-wrapper" style={{ textAlign: 'center', padding: '100px 20px' }}>
//         <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Your Cart is Empty</h2>
//         <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#333', color: 'white', borderRadius: '4px' }}>
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   // Calculation placeholders (in a real app, these would come from an API)
//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
//   const shipping = 0.00; // Free shipping example
//   const estimatedTax = (subtotal * 0.08).toFixed(2); 
//   const total = (parseFloat(subtotal) + parseFloat(shipping) + parseFloat(estimatedTax)).toFixed(2);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real application, you would process the payment here.
//     alert("Checkout successful! (Placeholder)"); 
//   };

//   return (
//     <div className="checkout-page-wrapper">
//       <h1 className="checkout-header">Checkout</h1>
      
//       <div className="checkout-main-layout">
        
//         {/* Left Column: Delivery Options and Form */}
//         <div className="delivery-options">
//           <h2>Delivery Options</h2>
          
//           {/* Home/Office Toggle */}
//           <div className="delivery-toggle">
//             <button 
//               className={deliveryOption === 'Home/Office' ? 'active' : ''}
//               onClick={() => setDeliveryOption('Home/Office')}
//             >
//               Home/Office
//             </button>
//             <button 
//               className={deliveryOption === 'APO/FPO' ? 'active' : ''}
//               onClick={() => setDeliveryOption('APO/FPO')}
//             >
//               APO/FPO
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="delivery-form">
//             <input type="email" placeholder="Email*" required />
            
//             <div className="form-group-inline">
//               <input type="text" placeholder="First Name*" required />
//               <input type="text" placeholder="Last Name*" required />
//             </div>

//             <input type="text" placeholder="Start typing address" required />
            
//             <span className="manual-address-link" onClick={() => console.log('Address entry clicked')}>
//               Enter address manually
//             </span>

//             <input type="tel" placeholder="Phone Number*" required />

//             <button type="submit">Place Order</button>
//           </form>
//         </div>
        
//         {/* Right Column: Order Summary */}
//         <div className="bag-summary">
//           <h2>In Your Bag</h2>
//           <div className="bag-summary-box">
            
//             {/* Totals Section */}
//             <div className="bag-summary-totals">
//               <div className="summary-row">
//                 <span>Subtotal</span>
//                 <span>${subtotal}</span>
//               </div>
//               <div className="summary-row">
//                 <span>Shipping</span>
//                 <span>${shipping.toFixed(2)}</span>
//               </div>
//               <div className="summary-row">
//                 <span>Estimated Tax</span>
//                 <span>${estimatedTax}</span>
//               </div>
//               <div className="summary-row total-row">
//                 <span>Total</span>
//                 <span>${total}</span>
//               </div>
//             </div>

//             <p style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '20px' }}>
//               Arrives by {getArrivalDate()}
//             </p>

//             <Link to="/cart" style={{ textDecoration: 'underline', color: '#333', fontSize: '0.9rem', display: 'block', marginBottom: '10px' }}>
//                 Edit
//             </Link>

//             {/* Item List */}
//             {cart.map(item => (
//               <div key={item.id} className="bag-item">
//                 <img src={item.image} alt={item.name} />
//                 <div className="bag-item-details">
//                   <p style={{ fontWeight: 600 }}>{item.name}</p>
//                   <p>Price: ${item.price}</p>
//                   <p>Qty: {item.qty}</p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import products from "../data/products"; // Import products to get images

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [deliveryOption, setDeliveryOption] = useState('Home/Office');

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Helper to get product image
  const getProductImage = (id) => {
    const product = products.find(p => p.id === id);
    if (product && product.images && product.images.length > 0) {
      return product.images[0];
    }
    if (product && product.image) {
      return product.image;
    }
    return `https://placehold.co/80x80/eee/ccc?text=Item`;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // In a real app, you'd process the payment here
    alert("Order placed successfully!");
    clearCart();
    // You would then redirect, e.g., using useNavigate()
  };

  return (
    <div className="checkout-page-layout container">
      
      {/* Column 1: Delivery Form */}
      <form className="checkout-form-nike" onSubmit={handlePlaceOrder}>
        <h1>Checkout</h1>

        {/* Delivery Options */}
        <div className="delivery-options-nike">
          <button 
            type="button"
            className={deliveryOption === 'Home/Office' ? 'selected' : ''}
            onClick={() => setDeliveryOption('Home/Office')}
          >
            Home/Office
          </button>
          <button 
            type="button"
            className={deliveryOption === 'APO/FPO' ? 'selected' : ''}
            onClick={() => setDeliveryOption('APO/FPO')}
          >
            APO/FPO
          </button>
        </div>

        {/* Form Fields */}
        <div className="form-group full-width">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" required />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="address">Address*</label>
          <input type="text" id="address" placeholder="Start typing address..." required />
        </div>

        <div className="form-group full-width">
          <label htmlFor="phone">Phone Number*</label>
          <input type="tel" id="phone" required />
        </div>
        
        {/* In a real app, you'd have more fields (City, ZIP) and payment */}
        
        <button type="submit" className="payment-btn">
          Place Order
        </button>
      </form>

      {/* Column 2: Order Summary */}
      <aside className="checkout-summary-nike">
        <h2>In Your Bag</h2>
        
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>₹{total.toFixed(2)}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <strong>₹0.00</strong>
        </div>
        <div className="summary-row">
          <span>Estimated Tax</span>
          <strong>₹0.00</strong>
        </div>
        <div className="summary-row total summary-total">
          <span>Total</span>
          <strong>₹{total.toFixed(2)}</strong>
        </div>

        {/* Arrives by... (Static example) */}
        <p style={{ margin: '1rem 0', fontWeight: '600' }}>Arrives by Tue, Nov 8</p>

        {/* Items in Bag */}
        <div className="bag-items">
          {cart.map(item => (
            <div key={item.id} className="bag-item">
              <img src={getProductImage(item.id)} alt={item.name} />
              <div className="bag-item-details">
                <h4>{item.name}</h4>
                <p>Qty: {item.qty}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/cart" style={{ fontSize: '0.9rem', color: '#555' }}>Edit Bag</Link>
      </aside>

    </div>
  );
}

