import Button from "../ui/Button";

function Menu() {
  return (
    <div className="grid grid-cols-1 gap-2 ">
      <div className="border-2 border-amber-300 rounded-md px-3 py-4">
        <img />
        <p>Food name</p>
        <p>price</p>
        <p>ingredients</p>
        <Button className="primary">Add to cart</Button>
      </div>
      <div className="border-2 border-amber-300 rounded-md px-4 py-4">
        <img />
        <p>Food name</p>
        <p>price</p>
        <p>ingredients</p>
        <Button className="primary">Add to cart</Button>
      </div>
      <div className="border-2 border-amber-300 rounded-md px-4 py-4">
        <img />
        <p>Food name</p>
        <p>price</p>
        <p>ingredients</p>
        <Button className="primary">Add to cart</Button>
      </div>
    </div>
  );
}

export default Menu;
