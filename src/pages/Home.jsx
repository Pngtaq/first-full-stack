import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1>WELCOME TO [COMPANY NAME]</h1>
      <h3>THE MOST FRIENDLY WEBSITE WHICH WILL HELP YOU TO </h3>

      <Link to="/pricing" className="border-amber-400 border-2 ">
        go to [page you want to go to]
      </Link>
    </div>
  );
}

export default Home;
