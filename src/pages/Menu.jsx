import ViewCart from "./ViewCart";
import MenuItems from "../features/menu/MenuItems";
import { getMenu } from "../services/getMenu";
import { useQuery } from "react-query";
import Spinner from "../ui/Spinner";

function Menu() {
  const { data, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-2 px-4 mb-16 sm:grid-cols-2 md:grid-cols-3">
          {data.map((data) => (
            <MenuItems data={data} key={data.id} />
          ))}
        </div>
      )}

      <div>
        <ViewCart />
      </div>
    </div>
  );
}

export default Menu;
