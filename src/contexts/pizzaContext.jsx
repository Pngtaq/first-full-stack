import { createContext, useContext, useReducer, useState } from "react";

const PizzaContext = createContext();

const initialState = {
  cart: [
    // id,
    // name,
    // unitPrice: regularPrice,
    // quantity: 1,
    // totalPrice: 0,
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "menu/addToCart":
      return { cart: [...state.cart, action.payload] };
    case "menu/addQuantity":
      return {
        cart: state.cart.map((pizza) => {
          if (pizza.id !== action.payload) return { ...pizza };
          return { ...pizza, quantity: pizza.quantity++ };
        }),
      };
    case "menu/reduceQuantity":
      // const filteredPeople = cart?.filter((item) => item.id !== action.payload);
      return {
        cart: state.cart.map((pizza) => {
          if (pizza.id !== action.payload) {
            return pizza;
          }

          if (pizza.quantity > 0) {
            return { ...pizza, quantity: pizza.quantity - 1 };
          }

          // If quantity is already 0, return the same pizza object
          return pizza;
        }),
      };
    case "menu/TotalPrice":
      return {
        cart: state.cart.map((pizza) => {
          if (pizza.id === action.payload)
            return { ...pizza, totalPrice: pizza.quantity * pizza.unitPrice };
          return { ...pizza };
        }),
      };
    case "menu/removeZeroQuantity":
      return {
        cart: state.cart.filter((pizza) => {
          if (pizza.quantity !== 0) return pizza;
        }),
      };

    case "menu/delete":
      return {
        cart: state.cart.map((pizza) => {
          if (pizza.id === action.payload) return { ...pizza, quantity: 0 };
          return { ...pizza };
        }),
      };
  }
}

function PizzaProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  function isAdded(id) {
    return cart.find((pizza) => pizza.id === id)?.quantity ?? 0;
  }
  const totalBill = cart.reduce((acc, pizza) => acc + pizza.totalPrice, 0);

  return (
    <PizzaContext.Provider value={{ cart, dispatch, isAdded, totalBill }}>
      {children}
    </PizzaContext.Provider>
  );
}

function usePizza() {
  const context = useContext(PizzaContext);
  if (context === undefined)
    throw new Error("PizzaContext was used outside the PizzaProvider");
  return context;
}

export { PizzaProvider, usePizza };
