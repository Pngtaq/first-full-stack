import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="text-center space-y-2">
      <h1>WELCOME TO [COMPANY NAME]</h1>
      <h3 className="pb-10">
        THE MOST FRIENDLY WEBSITE WHICH WILL HELP YOU TO akjfhkj hkajh
        kjhdakjhfk jahj khj hakjdshfdkjahf jadfkha
      </h3>

      <Link
        to="/services"
        className="border-amber-400 border-2 px-4 py-2 rounded-md"
      >
        go to [page you want to go to]
      </Link>
    </div>
  );
}

export default Home;
