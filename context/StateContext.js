import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const addUpdateCartItem = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }

        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    //console.log(cartItems, 'addUpdateCartItem Cart Items', quantity, product);

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const toggleCartItemQuantity = (itemId, valueType) => {
    foundProduct = cartItems.find((item) => item._id === itemId);
    index = cartItems.findIndex((item) => item._id === itemId);

    const updateCartItems = cartItems.filter((item) => item._id !== itemId);

    if (valueType === '+') {
      foundProduct.quantity += 1;

      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQty) => prevTotalQty + 1);
    } else if (valueType === '-') {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQty) => prevTotalQty - 1);
      }
    }

    updateCartItems.splice(index, 0, { ...foundProduct, quantity: foundProduct.quantity });
    setCartItems(updateCartItems);
  };

  const onRemoveFromCart = (itemId) => {
    foundProduct = cartItems.find((item) => item._id === itemId);
    index = cartItems.findIndex((item) => item._id === itemId);

    const updateCartItems = cartItems.filter((item) => item._id !== itemId);

    var totalCurrentPrice = foundProduct.price * foundProduct.quantity;

    setTotalPrice((prevTotalPrice) => prevTotalPrice - totalCurrentPrice);
    setTotalQuantities((prevTotalQty) => prevTotalQty - foundProduct.quantity);
    setCartItems(updateCartItems);
  };

  const addQtyItemToCart = () => {
    setQty((preQy) => preQy + 1);
  };

  const removeQtyItemFromCart = () => {
    setQty((preQy) => {
      if (preQy - 1 <= 1) return 1;
      return preQy - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        // onAdd,
        // onRemove,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        addQtyItemToCart,
        removeQtyItemFromCart,
        addUpdateCartItem,
        toggleCartItemQuantity,
        onRemoveFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};
