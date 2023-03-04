import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserContextProviderProps {
  children: React.ReactElement;
}

interface IUser {
  __v: number;
  _id: string;
  email: string;
  name: string;
  password: string;
}

interface IContextValue {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const UserContext = createContext<IContextValue>({
  user: {
    __v: 0,
    _id: "",
    email: "",
    name: "",
    password: "",
  },
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({
  children,
}: IUserContextProviderProps) => {
  const [user, setUser] = useState({
    __v: 0,
    _id: "",
    email: "",
    name: "",
    password: "",
  });

  useEffect(() => {
    if (user.name === "") {
      axios.get("/profile");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
