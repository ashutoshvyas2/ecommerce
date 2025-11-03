
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart(); 

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
      
//       {/* Wrap text content for better CSS control if needed */}
//       <div className="product-content">
//         <h2>{product.name}</h2>
//         <p>₹{product.price}</p>
//       </div>
      
//       <div className="product-actions">
//         {/* View Details Link (Styled by .product-card a) */}
//         <Link to={`/product/${product.id}`}>
//           View Details 
//         </Link>

//         {/* Add to Cart Button */}
//         <button 
//           onClick={() => addToCart(product)} 
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
// We are no longer importing PixelCard, as we'll use new CSS classes.

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="new-product-card">
      
      {/* Image Section with Wishlist Button */}
      <div className="new-card-image-section">
        <Link to={`/product/${product.id}`}>
          <img 
            src={(product.images && product.images[0]) || product.image || 'https://placehold.co/300x300/f0f0f0/ccc?text=Product'} 
            alt={product.name} 
          />
        </Link>
        <button className="new-wishlist-btn" title="Add to Wishlist">
          {/* Heart Icon SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* Info Section with Price and Cart Button */}
      <div className="new-card-info-section">
        <div className="new-card-text">
          <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <h3 title={product.name}>
              {/* Truncate long names */}
              {product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name}
            </h3>
            {/* Assuming brand is part of the product, otherwise hardcode or remove */}
            <p>{product.brand || "Brand"}</p>
          </Link>
        </div>

        <div className="new-card-buy-section">
          <p className="new-card-price">₹{product.price}</p>
          <button className="new-add-cart-btn" title="Add to Cart" onClick={() => addToCart(product)}>
            {/* Cart Icon SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}

