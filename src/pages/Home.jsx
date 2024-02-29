import { TypeAnimation } from "react-type-animation";

import Button from "../ui/Button";
import { useEffect, useState } from "react";

function Home() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 6000);
  }, []);
  return (
    <div className="text-center space-y-10 px-4 py-2">
      <div className="text-4xl font-semibold sm:text-5xl md:text-6xl">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to Pizza mania...",
          ]}
          wrapper="h1"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={1}
          cursor={false}
        />
      </div>

      <div className="text-xl sm:text-2xl md:text-4xl ">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially

            "Indulge in the perfect slice of heaven with our delectable pizzas. Crafted with the finest ingredients and baked to perfection, our pizzas promise a burst of flavors in every bite. Explore our menu and experience a taste sensation that will keep you coming back for more.",
          ]}
          wrapper="div"
          speed={80}
          style={{ display: "inline-block" }}
          cursor={false}
        />
      </div>
      <div>
        {showComponent && (
          <Button className="primary" to="/menu">
            Go to menu
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
