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

  return {
    state,
    addToCart,
  };
};

export default useInitialState;
