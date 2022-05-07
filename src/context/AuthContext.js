import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [check, setCheck] = useState(false);

  const [login, setLogin] = useState(
    localStorage.getItem("user") ? Boolean(localStorage.getItem("user")) : false
  );

  return (
    <div>
      <LoginContext.Provider
        value={{
          login,
          setLogin,
          check,
          setCheck,
        }}
      >
        {children}
      </LoginContext.Provider>
    </div>
  );
}

export { LoginContext, LoginProvider };
