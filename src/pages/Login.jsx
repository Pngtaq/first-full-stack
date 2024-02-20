import Button from "../ui/Button";

function Login() {
  return (
    <div className="flex justify-between items-center gap-6 px-3 ">
      <img
        src="../../public/images/pizza.png"
        className="w-3/6 sm:relative absolute opacity-15"
      />
      <form className="space-y-4 border-2 border-amber-300  pt-16 z-10 sm:px-4 sm:py-16 px-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold">
            Username
          </label>
          <input />

          <label htmlFor="" className="font-bold">
            Password
          </label>
          <input />
        </div>

        <div className="flex justify-center">
          <Button className="secondary">Login</Button>
        </div>
        <div className="bt-2 border-amber-300 flex justify-between gap-6 py-8  sm:p-0">
          <Button to="signUp" className="header">
            Sign up
          </Button>
          <Button to="forgotPass" className="header">
            Forgot password?
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
