import { useMutation } from "react-query";
import { usePizza } from "../contexts/pizzaContext";
import CartList from "../features/cart/CartList";
import supabase from "../services/supabase";
import Button from "../ui/Button";
import toast from "react-hot-toast";

function Cart() {
  const { totalBill, cart } = usePizza();

  const pizzasName = cart
    .map((pizza) => {
      return pizza.name;
    })
    .join(", ");

  const { mutate } = useMutation({
    mutationFn: insertOrder,
    onSuccess: () => {
      toast.success("Your order is complete.");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  async function insertOrder() {
    const { data, error } = await supabase
      .from("order")
      .insert([
        {
          pizza_name: pizzasName,
          owner: "me",
          address: "secret",
        },
      ])
      .select();

    if (error) {
      console.log(error);
      throw new Error("Your order could not be completed.");
    }
    return data;
  }

  function handleSubmit() {
    mutate({
      pizza_name: pizzasName,
      owner: "me",
      address: "secret",
    });
  }

  return (
    <div className="p-4 space-y-3">
      <h1 className="border-b-2 border-amber-300 text-xl font-bold">
        Your cart, Raison
      </h1>

      {cart.map((pizza) => (
        <CartList pizza={pizza} key={pizza.id} />
      ))}

      <div className="pt-8 border-t-2 border-amber-400 flex items-center justify-end text-xl font-bold gap-5">
        <h1>Total: </h1>
        <h1>${totalBill}</h1>
      </div>

      <div className="flex justify-end">
        <Button className="primary" onClick={handleSubmit}>
          Order now
        </Button>
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
