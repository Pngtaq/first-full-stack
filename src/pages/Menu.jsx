import Button from "../ui/Button";
import ViewCart from "./ViewCart";

function Menu() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 px-4 mb-16 sm:grid-cols-2 md:grid-cols-3">
        <div className="border-2 border-amber-300 rounded-md px-3 py-4 flex flex-col ">
          <img
            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            alt="pizza-1"
            className="m-auto rounded-md"
          />
          <div className="space-y-2 py-4">
            <p>Food name</p>
            <p>price</p>
            <p>ingredients</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Button className="primary">Add to cart</Button>
            <div>
              <Button className="tertiary">-</Button>
              <span className="px-2">1</span>
              <Button className="tertiary">+</Button>
            </div>
          </div>
        </div>

        <div className="border-2 border-amber-300 rounded-md px-3 py-4 flex flex-col ">
          <img
            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            alt="pizza-1"
            className="m-auto rounded-md"
          />
          <div className="space-y-2 py-4">
            <p>Food name</p>
            <p>price</p>
            <p>ingredients</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Button className="primary">Add to cart</Button>
            <div>
              <Button className="tertiary">-</Button>
              <span className="px-2">1</span>
              <Button className="tertiary">+</Button>
            </div>
          </div>
        </div>

        <div className="border-2 border-amber-300 rounded-md px-3 py-4 flex flex-col ">
          <img
            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            alt="pizza-1"
            className="m-auto rounded-md"
          />
          <div className="space-y-2 py-4">
            <p>Food name</p>
            <p>price</p>
            <p>ingredients</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Button className="primary">Add to cart</Button>
            <div>
              <Button className="tertiary">-</Button>
              <span className="px-2">1</span>
              <Button className="tertiary">+</Button>
            </div>
          </div>
        </div>

        <div className="border-2 border-amber-300 rounded-md px-3 py-4 flex flex-col ">
          <img
            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            alt="pizza-1"
            className="m-auto rounded-md"
          />
          <div className="space-y-2 py-4">
            <p>Food name</p>
            <p>price</p>
            <p>ingredients</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Button className="primary">Add to cart</Button>
            <div>
              <Button className="tertiary">-</Button>
              <span className="px-2">1</span>
              <Button className="tertiary">+</Button>
            </div>
          </div>
        </div>

        <div className="border-2 border-amber-300 rounded-md px-3 py-4 flex flex-col ">
          <img
            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            alt="pizza-1"
            className="m-auto rounded-md"
          />
          <div className="space-y-2 py-4">
            <p>Food name</p>
            <p>price</p>
            <p>ingredients</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Button className="primary">Add to cart</Button>
            <div>
              <Button className="tertiary">-</Button>
              <span className="px-2">1</span>
              <Button className="tertiary">+</Button>
            </div>
          </div>
        </div>

        <div className="border-2 border-amber-300 rounded-md px-3 py-4 flex flex-col ">
          <img
            src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
            alt="pizza-1"
            className="m-auto rounded-md"
          />
          <div className="space-y-2 py-4">
            <p>Food name</p>
            <p>price</p>
            <p>ingredients</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Button className="primary">Add to cart</Button>
            <div>
              <Button className="tertiary">-</Button>
              <span className="px-2">1</span>
              <Button className="tertiary">+</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ViewCart />
      </div>
    </div>
  );
}

export default Menu;
