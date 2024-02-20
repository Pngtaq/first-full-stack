import Button from "../ui/Button";

function Home() {
  return (
    <div className="text-center space-y-8 text-2xl px-10 py-10 sm:text-4xl">
      <h1 className=" text-bold">"Welcome to Feeding Frenzy..."</h1>
      <h3>
        Dive into a world of culinary delights as we explore the rich tapestry
        of flavors, aromas, and textures that make up the vibrant landscape of
        food.
      </h3>

      <div>
        <Button to="/menu" className="primary">
          GO TO MENU
        </Button>
      </div>
    </div>
  );
}

export default Home;
