import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verificar si el carrito está vacío o si tiene productos
  const inCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  // Vaciar el carrito
  const clearCart = () => setCart([]);

  // Agregar producto al carrito
  const addProduct = (item, quantity) => {
    let cartNew;
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      product.quantity += quantity;
      cartNew = [...cart];
    } else {
      product = { ...item, quantity: quantity };
      cartNew = [...cart, product];
    }
    setCart(cartNew);
  };

  // Eliminar producto del carrito
  const deleteProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  // Cantidad total de productos en el carrito, para mostrarlo en el NavBar
  const totalProducts = () =>
    cart.reduce((acc, currentProduct) => acc + currentProduct.quantity, 0);

  // Precio total del carrito
  const totalPrice = () => {
    return cart.reduce((prev, acc) => prev + acc.quantity * acc.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        inCart,
        clearCart,
        addProduct,
        deleteProduct,
        totalProducts,
        totalPrice,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
