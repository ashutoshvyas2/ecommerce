

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
// import products from '../data/products';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  // State for this page's UI
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  // Effect to initialize or reset state when the product loads or changes
  useEffect(() => {
    if (product) {
      // Set initial color (if available)
      const initialColor = (product.colors && product.colors.length > 0) ? product.colors[0] : null;
      setSelectedColor(initialColor);
      
      // Set initial main image
      // Use color-specific image if available, otherwise first gallery image, otherwise fallback
      const initialImage = initialColor ? initialColor.image : (product.images && product.images.length > 0) ? product.images[0] : product.image;
      setMainImage(initialImage);
      
      setQuantity(1); // Reset quantity
    }
  }, [id, product]); // Re-run if ID or product data changes

  // Handler for changing quantity
  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount)); // Prevent quantity < 1
  };

  // Handler for selecting a new color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setMainImage(color.image); // Update main image to the color's image
  };

  // Handler for clicking a thumbnail
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
  
  // Handle adding to cart
  const handleAddToCart = () => {
    // We create a product "snapshot" to add to the cart
    // This ensures the cart stores the *selected* color and quantity
    const productToAdd = {
      ...product,
      selectedColor: selectedColor ? selectedColor.name : null,
      // We need to modify CartContext to accept quantity directly.
      // For now, let's use the loop, but this is not ideal.
      // A better way is: addToCart(product, quantity);
    };

    console.log("Adding to cart:", productToAdd, "Quantity:", quantity);

    // Current CartContext only supports adding one by one
    for (let i = 0; i < quantity; i++) {
      addToCart(product); // This adds the *base* product
    }
    
    // TODO: Update CartContext to handle:
    // addToCart(productToAdd, quantity);
  };

  if (!product) {
    return <div>Product not found.</div>;
  }
  
  // Ensure data structure is valid before rendering
  const hasColors = product.colors && product.colors.length > 0;
  const hasImages = product.images && product.images.length > 0;

  return (
    <div className="product-page-layout united-blue-style">
      
      {/* Left Column: Image Gallery */}
      <div className="product-image-column-ub">
        <div className="main-image-ub">
          <img src={mainImage || product.image} alt={product.name} />
        </div>
        
        {/* Thumbnail Gallery */}
        {hasImages && (
          <div className="thumbnail-gallery-ub">
            {product.images.map((img, index) => (
              <button 
                key={index} 
                className={`thumbnail-btn ${img === mainImage ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(img)}
              >
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Details */}
      <div className="product-details-column-ub">
        <h1 className="product-title-ub">{product.name}</h1>
        <p className="product-price-ub">₹{product.price}</p>
        
        {/* Color Swatches */}
        {hasColors && (
          <div className="color-selector-ub">
            <p className="color-label">Color: <strong>{selectedColor ? selectedColor.name : 'N/A'}</strong></p>
            <div className="color-swatch-container">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`color-swatch ${selectedColor && selectedColor.name === color.name ? 'active' : ''}`}
                  style={{ backgroundColor: color.code }}
                  title={color.name}
                  onClick={() => handleColorSelect(color)}
                >
                   {/* This shows the image inside the swatch, good for multi-color patterns */}
                   <img src={color.image} alt={color.name} />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="quantity-selector-ub">
          <p className="quantity-label">Quantity</p>
          <div className="quantity-input-wrapper">
            <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>−</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons-ub">
          <button className="add-to-cart-btn-ub" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-now-btn-ub">
            Buy with Shop Pay
          </button>
        </div>
        
        <a href="#" className="more-payment-options">More payment options</a>

        {/* Long Description */}
        <div className="product-long-description-ub">
          <h3>{product.name}</h3>
          <p>{product.description_long || product.description}</p>
          {product.features && (
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

