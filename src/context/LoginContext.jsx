import { createContext, useContext, useState } from "react";

const MOCK_USERS = [
  {
    email: "admin@correo.com",
    password: "admin",
  },
  {
    email: "usuario1@correo.com",
    password: "1234",
  },
  {
    email: "usuario2@correo.com",
    password: "4321",
  },
];

export const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext)
}

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    logged: false,
    error: null,
  });
  console.log(user)

  const login = (values) => {
    const match = MOCK_USERS.find(
      (user) => user.email === values.email);

    if (!match) {
      setUser({
        email: null,
        logged: false,
        error: 'Usuario invalido'
      })

      return
    }
    
    if(match.password === values.password) {
      setUser({
        email: match.email,
        logged: true,
        error: null
      })
    } else {
      setUser({
        email: null,
        logged: false,
        error: 'Contraseña invalida'
      });
    }
  };

  const logout = () => {
    setUser({
      email: "",
      logged: false,
      error: null,
    });
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>{children}</LoginContext.Provider>
  );
};
