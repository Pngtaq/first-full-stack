import Button from "../../ui/Button";

function MenuItems({ data, isLoading }) {
  return (
    <div className="border-2 border-amber-300 rounded-md px-4 py-2  flex flex-col ">
      <img
        src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
        alt="pizza-1"
        className="rounded-md"
      />
      <div className="space-y-2 py-4">
        <p>Name: {data.name}</p>
        <p>Price: {data.regularPrice}</p>
        <p>Toppings: {data.toppings}</p>
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-end h-full">
        <Button className="primary">Add to cart</Button>
        <div className="pb-3">
          <Button className="tertiary">-</Button>
          <span className="px-2">1</span>
          <Button className="tertiary">+</Button>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
