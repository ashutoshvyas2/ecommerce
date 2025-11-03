// import React, { useState, useEffect } from 'react';
// import products from "../data/products";
// import ProductCard from "../components/ProductCard";
// import { useSearch } from "../context/SearchContext";
// // 1. Import the SpinToWinModal
// import SpinToWinModal from '../components/SpinToWinModal';

// export default function Home() {
//   const { searchTerm } = useSearch();
//   // 2. Add state to control the modal
//   const [isSpinModalOpen, setIsSpinModalOpen] = useState(false);

//   // 3. Check if the user has seen the modal before
//   useEffect(() => {
//     const hasSeenModal = localStorage.getItem('seenSpinModal');
//     if (!hasSeenModal) {
//       // Show the modal after a short delay (e.g., 2 seconds)
//       const timer = setTimeout(() => {
//         setIsSpinModalOpen(true);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleModalClose = () => {
//     setIsSpinModalOpen(false);
//     // 4. Remember that the user has seen it
//     localStorage.setItem('seenSpinModal', 'true');
//   };

//   const getFilteredProducts = () => {
//     // Logic: If search term is empty, show no products.
//     // This matches your request to have a blank home page on logo click.
//     if (!searchTerm || searchTerm === "") {
//       return []; 
//     }

//     // Special filter flags
//     if (searchTerm === "isBestSeller") {
//       return products.filter(p => p.isBestSeller);
//     }
//     if (searchTerm === "isNewArrival") {
//       return products.filter(p => p.isNewArrival);
//     }

//     // Check if searchTerm is a known category
//     const uniqueCategories = [...new Set(products.map(p => p.category))];
//     if (uniqueCategories.includes(searchTerm)) {
//       return products.filter(p => p.category === searchTerm);
//     }

//     // Default: text search on product name
//     return products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   const filteredProducts = getFilteredProducts();

//   // Get a dynamic title based on the filter
//   const getFilterTitle = () => {
//     if (!searchTerm || searchTerm === "") {
//       // Updated welcome message for the blank state
//       return "Welcome! Select a category or search to begin.";
//     }
//     if (searchTerm === "isBestSeller") {
//       return "Best Selling Products";
//     }
//     if (searchTerm === "isNewArrival") {
//       return "New Arrivals";
//     }
//     const uniqueCategories = [...new Set(products.map(p => p.category))];
//     if (uniqueCategories.includes(searchTerm)) {
//       return searchTerm; // e.g., "Apparel"
//     }
//     // Default search title
//     return `Showing results for "${searchTerm}"`;
//   };

//   const filterTitle = getFilterTitle();

//   return (
//     // Use the container class for centering and max-width
//     <div className="container" style={{ padding: "30px 0" }}>
      
//       {/* 5. Add the modal to the page */}
//       <SpinToWinModal isOpen={isSpinModalOpen} onClose={handleModalClose} />

//       {/* CountdownTimer component removed */}

//       <h2 style={{ textAlign: "center", marginBottom: "30px", marginTop: "30px", fontWeight: 500 }}>
//         {filterTitle}
//       </h2>

//       {/* Show the grid only if there are products */}
//       {filteredProducts.length > 0 ? (
//         <div className="product-grid">
//           {filteredProducts.map((item) => (
//             <ProductCard key={item.id} product={item} />
//           ))}
//         </div>
//       ) : (
//         // Show a message if no products match (and it wasn't the default blank state)
//         searchTerm && (
//           <p style={{ textAlign: 'center', color: '#555', fontSize: '1.1rem' }}>
//             No products found matching your criteria.
//           </p>
//         )
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for hero buttons
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";
import SpinToWinModal from '../components/SpinToWinModal';

export default function Home() {
  const { searchTerm, setSearchTerm } = useSearch(); // Get setSearchTerm
  const [isSpinModalOpen, setIsSpinModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('seenSpinModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsSpinModalOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleModalClose = () => {
    setIsSpinModalOpen(false);
    localStorage.setItem('seenSpinModal', 'true');
  };

  // --- Product Filtering Logic ---
  const getFilteredProducts = () => {
    // Logic: If search term is empty, show no products.
    if (!searchTerm || searchTerm === "") {
      return []; 
    }
    // Special filter flags
    if (searchTerm === "isBestSeller") {
      return products.filter(p => p.isBestSeller);
    }
    if (searchTerm === "isNewArrival") {
      return products.filter(p => p.isNewArrival);
    }
    // Check if searchTerm is a known category
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    if (uniqueCategories.includes(searchTerm)) {
      return products.filter(p => p.category === searchTerm);
    }
    // Default: text search on product name
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredProducts = getFilteredProducts();

  // --- Dynamic Title Logic ---
  const getFilterTitle = () => {
    if (searchTerm === "isBestSeller") return "Best Selling Products";
    if (searchTerm === "isNewArrival") return "New Arrivals";
    
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    if (uniqueCategories.includes(searchTerm)) return searchTerm;

    if (searchTerm) return `Showing results for "${searchTerm}"`;
    
    // Default title when no filter is active
    return "Our Products";
  };
  
  // Use a separate title for the static "Our Products" heading
  const staticTitle = "Our Products";
  const dynamicFilterTitle = getFilterTitle();

  return (
    <> {/* Use React.Fragment to wrap multiple top-level elements */}
      
      {/* --- Spin to Win Modal --- */}
      <SpinToWinModal isOpen={isSpinModalOpen} onClose={handleModalClose} />

      {/* --- Hero Section (New) --- */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Shop With Us</h1>
          <img src={process.env.PUBLIC_URL + "/placeholder-hero.jpg"} alt="Hero Background" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </p>
          <div className="hero-buttons">
            {/* "Shop Now" can be a link to a specific category, e.g., Apparel */}
            <Link 
              to="/" 
              onClick={() => setSearchTerm("Apparel")} 
              className="hero-btn primary"
            >
              SHOP NOW
            </Link>
            <Link to="/support" className="hero-btn secondary">
              SUPPORT
            </Link>
          </div>
        </div>
      </div>

      {/* --- Product Grid Section --- */}
      <div className="container" style={{ padding: "30px 0" }}>

        {/* Static Title (from new design) */}
        <h3 className="products-title-static">Popular Products</h3>
        
        {/* Dynamic Title (based on filter) */}
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontWeight: 500 }}>
          {/* Show the dynamic title ONLY if a filter is active */}
          {searchTerm ? dynamicFilterTitle : staticTitle}
        </h2>

        {/* Show the grid only if there are products */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          // Show a message if a search was active but found nothing
          searchTerm ? (
            <p style={{ textAlign: 'center', color: '#555', fontSize: '1.1rem' }}>
              No products found matching your criteria.
            </p>
          ) : (
            // Show this if the page is blank by default (no search term)
            <p style={{ textAlign: 'center', color: '#555', fontSize: '1.1rem' }}>
              Select a category or search to see our products.
            </p>
          )
        )}
      </div>
    </>
  );
}

