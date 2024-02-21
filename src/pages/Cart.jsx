function Cart() {
  return (
    <div className="p-4">
      <h1 className="border-b-2 border-amber-300 text-xl font-bold">
        Your cart, Raison
      </h1>
      <div className="space-y-2">
        <div className="text-center">
          <p className="space-x-14  sm:space-x-56 text-lg ">
            <span>x1</span> <span>Pepperoni</span>
            <span>$12</span>
          </p>
        </div>

        <div className="text-center">
          <p className="space-x-14  sm:space-x-56 text-lg ">
            <span>x1</span> <span>Pepperoni</span>
            <span>$12</span>
          </p>
        </div>
        <div className="text-center">
          <p className="space-x-14  sm:space-x-56 text-lg ">
            <span>x1</span> <span>Pepperoni</span>
            <span>$12</span>
          </p>
        </div>

        <div className="pt-8 border-t-2 border-amber-400 flex items-center justify-around">
          <h1 className="pl-56">Total:</h1>
          <h1>$$$</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
