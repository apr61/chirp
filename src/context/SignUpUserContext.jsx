import { createContext, useReducer, useState } from "react";
import { signUpReducer } from "./reducers";
import { logOut, signIn, signUp } from "../services/auth";
import { useNavigate } from "react-router-dom";

export const SignUpContext = createContext();

const signUpInitialValue = {
  name: "",
  email: "",
  dob: "",
  password: "",
  cpassword: "",
  username: "",
};

export default function SignUpProvider({ children }) {
  const [signUpState, signUpDispatch] = useReducer(
    signUpReducer,
    signUpInitialValue
  );
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function handleInputOnChange(e) {
    signUpDispatch({ type: e.target.name, payload: e.target.value });
  }
  function signUpUser() {
    try {
      setLoading(true);
      signUp(
        signUpState.email,
        signUpState.password,
        signUpState.name,
        signUpState.dob,
        signUpState.username
      )
        .then(() => {
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  function loginUser() {
    try {
      setLoading(true);
      signIn(signUpState.email, signUpState.password)
        .then(() => {
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SignUpContext.Provider
      value={{
        signUpState,
        signUpDispatch,
        handleInputOnChange,
        signUpUser,
        loading,
        loginUser,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}
