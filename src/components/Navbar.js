// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useSearch } from "../context/SearchContext"; 
// import { useState } from "react"; // 1. Import useState

// export default function Navbar() {
//   const { cart } = useCart();
//   const { searchTerm, setSearchTerm } = useSearch();
//   // 2. Local state to track if the search input is expanded
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false); 

//   // Calculate the total quantity of ALL items in the cart
//   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

//   // 3. Function to toggle the search input visibility
//   const toggleSearch = () => {
//     // If expanding, set to true.
//     if (!isSearchExpanded) {
//       setIsSearchExpanded(true);
//     } else {
//       // If collapsing, clear the search term and then set to false.
//       setSearchTerm("");
//       setIsSearchExpanded(false);
//     }
//   };

//   return (
//     <nav style={{ padding: "10px 20px", background: "#eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
//       {/* Element on the far left */}
//       <Link to="/">Home</Link>
      
//       {/* Group on the far right (Search + Cart) */}
//       <div style={{ 
//         display: "flex", 
//         alignItems: "center", 
//         gap: "20px" // Adds spacing between search and cart
//       }}>
        
//         {/* Conditional Search Field/Icon */}
//         {isSearchExpanded ? (
//           // Search Input Field (Visible when expanded)
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               // Auto-focus on expand for better UX
//               autoFocus
//               style={{ 
//                 padding: "5px 10px", 
//                 borderRadius: "5px", 
//                 border: "1px solid #ccc",
//                 transition: "width 0.3s ease-in-out",
//                 width: "180px" // Fixed width when expanded
//               }}
//             />
//             {/* Collapse button/icon */}
//             <button 
//               onClick={toggleSearch}
//               style={{ 
//                 background: 'none', 
//                 border: 'none', 
//                 cursor: 'pointer', 
//                 marginLeft: '5px',
//                 fontSize: '1.2rem'
//               }}
//               title="Close Search"
//             >
//               &times;
//             </button>
//           </div>
//         ) : (
//           // Search Icon (Visible when collapsed)
//           <button 
//             onClick={toggleSearch}
//             style={{ 
//               background: 'none', 
//               border: 'none', 
//               cursor: 'pointer', 
//               fontSize: '1.5rem',
//               padding: '0 5px' // Padding for better touch target
//             }}
//             title="Open Search"
//           >
//             🔍
//           </button>
//         )}

//         {/* Cart Link */}
//         <Link to="/cart">🛒 ({totalItems})</Link>
//       </div>
//     </nav>
//   );
// }


import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext"; 
import { useState, useMemo } from "react"; 
import products from "../data/products"; 

// Reusable Dropdown Component for Category
const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyle = {
    position: 'relative',
    display: 'inline-block',
    padding: '0 10px',
    cursor: 'pointer',
    zIndex: 10, // Ensure dropdown is above other elements
  };

  const contentStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#fff',
    minWidth: '160px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    padding: '12px 0',
    borderRadius: '5px',
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div 
      style={dropdownStyle}
      // These handlers make the dropdown appear on hover
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span style={{ fontWeight: 'bold' }}>{title} ▼</span>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default function Navbar() {
  const { cart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false); 

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const uniqueCategories = useMemo(() => {
    const categories = new Set();
    // Assuming the updated products data with 'category' field is available
    products.forEach(p => p.category && categories.add(p.category));
    return Array.from(categories);
  }, []);

  const toggleSearch = () => {
    if (!isSearchExpanded) {
      setIsSearchExpanded(true);
    } else {
      setSearchTerm("");
      setIsSearchExpanded(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category); // This sets the category as the new search term/filter
    setIsSearchExpanded(false); 
  };
  
  const handleNavLinkClick = (term) => {
      setSearchTerm(term);
      setIsSearchExpanded(false); 
  }

  return (
    <nav style={{ padding: "10px 20px", background: "#eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
      {/* LEFT SIDE: Logo and Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        {/* Company Logo (Image) - redirects to Home and clears filter */}
        <Link 
          to="/" 
          onClick={() => setSearchTerm("")} 
          style={{ textDecoration: 'none', color: '#333', fontSize: '1.5rem', fontWeight: '900' }}
        >
          {/* Re-adding the Logo Image Link here */}
          <img 
            src={process.env.PUBLIC_URL + "/vt_logo.jpg"}
            alt="" 
            style={{ height: '50px', width: 'auto', display: 'block' }} 
          />
        </Link>
        
        <Link 
          to="/" 
          onClick={() => handleNavLinkClick("isBestSeller")} 
          style={{ textDecoration: 'none', color: '#333' }}
        >
          Best Seller
        </Link>
        
        <Link 
          to="/" 
          onClick={() => handleNavLinkClick("isNewArrival")} 
          style={{ textDecoration: 'none', color: '#333' }}
        >
          New Arrivals
        </Link>

        {/* Category (Dropdown) */}
        <Dropdown title="Category">
          {uniqueCategories.map(category => (
            <Link 
              key={category} 
              to="/"
              onClick={() => handleCategoryClick(category)} 
              style={{ padding: '8px 16px', cursor: 'pointer', color: '#333', textDecoration: 'none', display: 'block' }}
            >
              {category}
            </Link>
          ))}
        </Dropdown>
        
        <Link to="/support" onClick={() => handleNavLinkClick(" ")} style={{ textDecoration: 'none', color: '#333' }}>
          Support
        </Link>

      </div>
      
      {/* RIGHT SIDE: Search + Cart */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        {isSearchExpanded ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              style={{ 
                padding: "5px 10px", 
                borderRadius: "5px", 
                border: "1px solid #ccc",
                transition: "width 0.3s ease-in-out",
                width: "180px"
              }}
            />
            <button 
              onClick={toggleSearch}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                marginLeft: '5px',
                fontSize: '1.2rem'
              }}
              title="Close Search"
            >
              &times;
            </button>
          </div>
        ) : (
          <button 
            onClick={toggleSearch}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '1.5rem',
              padding: '0 5px'
            }}
            title="Open Search"
          >
            🕵🏻
          </button>
        )}

        <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>🛒 ({totalItems})</Link>
      </div>
    </nav>
  );
}
