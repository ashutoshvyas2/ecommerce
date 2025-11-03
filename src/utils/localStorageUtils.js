const CART_KEY = "myapp_cart";

export function saveCartToLocalStorage(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCartFromLocalStorage() {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function clearCartFromLocalStorage() {
  localStorage.removeItem(CART_KEY);
}
