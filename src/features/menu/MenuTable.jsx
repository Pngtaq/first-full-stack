import { useQuery } from "react-query";
import { getMenu } from "../../services/getMenu";
import MenuItems from "./MenuItems";
import Spinner from "../../ui/Spinner";

function MenuTable() {
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
    </div>
  );
}

export default MenuTable;
