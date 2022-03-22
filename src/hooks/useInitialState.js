import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  // Payload: Recibe el producto enviado desde ProductItem.jsx
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  // payload: Recibe el id del producto a eliminar
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((element) => element.id != payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
