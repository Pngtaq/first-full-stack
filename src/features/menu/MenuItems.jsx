import { usePizza } from "../../contexts/pizzaContext";

import { useState } from "react";
import Button from "../../ui/Button";

function MenuItems({ data }) {
  const { addAmountPizza, reduceAmountPizza } = usePizza();
  const [perPizza, setPerPizza] = useState(0);
  const { name, regularPrice, toppings, image, id } = data;
  const [isAdded, setIsAdded] = useState(false);

  function handleReduceQuantity() {
    if (perPizza <= 1) setIsAdded(false);
    setPerPizza((pizzaQuantity) => pizzaQuantity - 1);
    reduceAmountPizza();
  }
  function handleAddQuantity() {
    setPerPizza((pizzaQuantity) => pizzaQuantity + 1);
    addAmountPizza();
  }

  function addToCart() {
    setPerPizza((pizzaQuantity) => pizzaQuantity + 1);
    addAmountPizza();
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
            <div className="px-2">{perPizza}</div>
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
