import { createContext, useContext, useReducer } from "react";

const PizzaContext = createContext();

const initialState = {
  price: [],
  discount: 0,
  total: 0,
  error: "",
  quantity: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "menu/increase":
      return {
        ...state,
        quantity: state.quantity + action.payload,
        total: state.price.reduce((acc, cur) => acc + cur, 0),
      };
    case "menu/reduce":
      console.log(state.price);
      return {
        ...state,
        quantity: state.quantity - action.payload,
        total: state.price.reduce((acc, cur) => acc + cur, 0),
      };
    case "menu/total":
      return {
        ...state,
        total: [action.payload].reduce((acc, cur) => acc + cur, 0),
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

  function addAmountPizza(pizzaPrice) {
    price.push(pizzaPrice);
    dispatch({ type: "menu/total", payload: pizzaPrice });

    dispatch({ type: "menu/increase", payload: 1 });
  }

  function reduceAmountPizza(pizzaPrice) {
    const index = price.indexOf(pizzaPrice);
    const newArray = price.splice(index, 1);
    dispatch({ type: "menu/total", pizzaPrice });
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
