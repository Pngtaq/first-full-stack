function CartList({ pizza }) {
  const { name, quantity, totalPrice } = pizza;
  return (
    <div className="space-y-2">
      <div>
        <p className="space-x-14  sm:space-x-56 text-lg flex justify-between ">
          <span>{quantity}x</span>{" "}
          <span>{name[0].toUpperCase() + name.slice(1)}</span>
          <span>${totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default CartList;
