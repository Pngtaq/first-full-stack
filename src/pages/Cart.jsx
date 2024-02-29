import { usePizza } from "../contexts/pizzaContext";
import CartList from "../features/cart/CartList";
import Button from "../ui/Button";

function Cart() {
  const { totalBill, cart } = usePizza();
  return (
    <div className="p-4">
      <h1 className="border-b-2 border-amber-300 text-xl font-bold">
        Your cart, Raison
      </h1>

      {cart.map((pizza) => (
        <CartList pizza={pizza} key={pizza.id} />
      ))}

      <div className="pt-8 border-t-2 border-amber-400 flex items-center justify-end text-xl font-bold">
        <h1>Total: </h1>
        <h1>${totalBill}</h1>
      </div>
      <Button className="backButton" type="back">
        Go back &#8617;
      </Button>
    </div>
  );
}

export default Cart;

{
  /* <div className="space-y-2">
<div className="text-center">
  <p className="space-x-14  sm:space-x-56 text-lg ">
    <span>x1</span> <span>Pepperoni</span>
    <span>$12</span>
  </p>
</div>     </div>*/
}
