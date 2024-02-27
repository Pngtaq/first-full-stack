import { usePizza } from "../../contexts/pizzaContext";

import Button from "../../ui/Button";

function MenuItems({ data }) {
  const { name, regularPrice, toppings, image, id } = data;
  const pizzaData = {
    id,
    name,
    unitPrice: regularPrice,
    quantity: 1,
    totalPrice: 0,
  };

  const { cart, dispatch, isAdded } = usePizza();
  // const pizzaIndex = cart.findIndex((pizza) => pizza.id === id);
  const isOpen = isAdded(id) > 0;

  function handleAddToCart() {
    dispatch({ type: "menu/addToCart", payload: pizzaData });
  }

  function handleAddQuantity() {
    dispatch({ type: "menu/addQuantity", payload: id });
  }

  function handleReduceQuantity() {
    dispatch({ type: "menu/reduceQuantity", payload: id });

    dispatch({ type: "menu/removeZeroQuantity" });
  }

  function handleDeletePizza() {
    dispatch({ type: "menu/deletePizza", payload: id });
    dispatch({ type: "menu/removeZeroQuantity" });
  }
  // function handleReduceQuantity() {
  //   // const pizzaIndex = cart.findIndex((pizza) => pizza.id === id);
  //   dispatch({ type: "menu/reduceQuantity", payload: id });
  // }

  const pizzaQuantity = cart?.find((pizza) => pizza.id === id)?.quantity ?? 0;

  return (
    <div className="border-2 border-amber-300 rounded-md px-4 py-2  flex flex-col  ">
      <img src={image} alt={`pizza-${id}`} className="rounded-md h-60" />
      <div className="space-y-2 py-4">
        <p>
          Name: {name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()}
        </p>
        <p>Price: ${regularPrice}</p>
        <p>Toppings: {toppings.toLowerCase()}</p>
      </div>

      <div className="flex gap-2 justify-center items-end h-full">
        {!isOpen && (
          <Button className="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
        {isOpen && (
          <div className="pb-3 flex items-center space-x-2">
            <Button className="tertiary" onClick={handleReduceQuantity}>
              -
            </Button>
            <div>{pizzaQuantity}</div>
            <Button className="tertiary" onClick={handleAddQuantity}>
              +
            </Button>
            <Button className="tertiary" onClick={handleDeletePizza}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItems;
