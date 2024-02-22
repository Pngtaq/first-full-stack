import { createContext, useContext, useReducer } from "react";

const PizzaContext = createContext();

const initialState = {
  price: 0,
  discount: 0,
  total: 1,
  error: "",
  quantity: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "menu/increase":
      return {
        ...state,
        quantity: state.quantity + action.payload,
        total: state.total * state.quantity,
      };
    case "menu/reduce":
      return {
        ...state,
        quantity: state.quantity - action.payload,
        total: state.total * state.quantity,
      };
    case "rejected":
      return { ...state, error: action.payload };
    default:
      throw new Error("Unkown action type.");
  }
}

function PizzaProvider({ children }) {
  const [{ price, discount, total, quantity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function addAmountPizza() {
    dispatch({ type: "menu/increase", payload: 1 });
  }

  function reduceAmountPizza() {
    dispatch({ type: "menu/reduce", payload: 1 });
  }

  return (
    <PizzaContext.Provider
      value={{
        price,
        quantity,
        discount,
        total,
        addAmountPizza,
        reduceAmountPizza,
      }}
    >
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
