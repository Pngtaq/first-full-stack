import { usePizza } from "../../contexts/pizzaContext";

import { useState } from "react";
import Button from "../../ui/Button";

function MenuItems({ data }) {
  const { name, regularPrice, toppings, image, id } = data;
  const { addAmountPizza, reduceAmountPizza } = usePizza();
  const [pizzaQuantity, setPizzaQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  function handleReduceQuantity() {
    if (pizzaQuantity <= 1) setIsAdded(false);
    setPizzaQuantity((pizzaQuantity) => pizzaQuantity - 1);

    reduceAmountPizza(regularPrice);
  }
  function handleAddQuantity() {
    setPizzaQuantity((pizzaQuantity) => pizzaQuantity + 1);
    addAmountPizza(regularPrice);
  }

  function addToCart() {
    setPizzaQuantity((pizzaQuantity) => pizzaQuantity + 1);
    addAmountPizza(regularPrice);
    setIsAdded(true);
  }

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
        <Button className="primary" onClick={addToCart}>
          Add to cart
        </Button>
        {isAdded && (
          <div className="pb-3 flex items-center">
            <Button className="tertiary" onClick={handleReduceQuantity}>
              -
            </Button>
            <div className="px-2">{pizzaQuantity}</div>
            <Button className="tertiary" onClick={handleAddQuantity}>
              +
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItems;
