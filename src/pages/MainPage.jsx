import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import useSignUpContext from "../hooks/useSignUpContext";
import Logo from "../components/Logo";

function MainPage() {
  const {
    loading,
    loginUser,
    signUpState: { email, password },
    handleInputOnChange,
  } = useSignUpContext();
  function handleOnSubmit(e) {
    e.preventDefault();
    loginUser();
  }
  return (
    <main className="flex min-h-screen items-center">
      <div className="max-w-md w-full mx-auto text-center p-4 flex flex-col gap-4">
        <form
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={handleOnSubmit}
        >
          <Logo />
          <h1 className="text-3xl font-bold">Login to access Chirp</h1>
          <Input
            labelName="Email"
            inputType="email"
            placeholder="you@example.com"
            required={true}
            autoFocus={true}
            inputValue={email}
            handleOnChange={handleInputOnChange}
            inputName={"EMAIL"}
          />
          <Input
            labelName="Password"
            inputType="password"
            placeholder="Enter password"
            required={true}
            inputValue={password}
            handleOnChange={handleInputOnChange}
            inputName={"PASSWORD"}
          />
          <Button loading={loading} classes="w-full">
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
        <button className="border border-slate-500 text-slate-700 rounded-md p-2 text-xl hover:bg-slate-500 hover:text-white">
          Login as Guest
        </button>
        <p className="text-slate-700 font-medium">
          New to Chirp ? Create Your account{" "}
          <Link to="/signup" className="text-teal-500">
            here
          </Link>
        </p>
      </div>
    </main>
  );
}

export default MainPage;
