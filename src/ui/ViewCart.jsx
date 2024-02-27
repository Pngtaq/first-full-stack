import Button from "./Button";

function ViewCart() {
  return (
    <div className="flex items-center justify-around py-2 uppercase font-bold fixed bottom-0 left-0 bg-amber-300 w-full">
      <p>
        Your total is: <span>${0}</span>
      </p>
      <Button className="viewCart" to="/cart">
        View cart <span className="text-2xl pl-8">&rarr;</span>
      </Button>
    </div>
  );
}

export default ViewCart;
