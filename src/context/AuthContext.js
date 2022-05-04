import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext()

function LoginProvider({children}) {
    const [user, setUser] = useState()
    const [login, setLogin] = useState(localStorage.getItem('login') ? Boolean(localStorage.getItem('login')) : false)

    return (
        <div>
            <LoginContext.Provider
                value={{
                    login, 
                    setLogin,
                    user, setUser
                }}
            >
                {children}
            </LoginContext.Provider>
        </div>
    )
}

export {LoginContext, LoginProvider}