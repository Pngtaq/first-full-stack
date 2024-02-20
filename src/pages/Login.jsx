import Button from "../ui/Button";

function Login() {
  return (
    <div className="space-y-4">
      <form>
        <label htmlFor="">Username</label>
        <input />
      </form>
      <div>
        <label htmlFor="">Password</label>
        <input />
      </div>
      <Button className="secondary">Login</Button>
    </div>
  );
}

export default Login;
