import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserContextProviderProps {
  children: React.ReactElement;
}

interface IUser {
  _id: string;
  email: string;
  name: string;
}

interface IContextValue {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const UserContext = createContext<IContextValue>({
  user: {
    _id: "",
    email: "",
    name: "",
  },
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({
  children,
}: IUserContextProviderProps) => {
  const [user, setUser] = useState({
    _id: "",
    email: "",
    name: "",
  });

  useEffect(() => {
    if (user?._id === "") {
      const fetchProfile = async () => {
        const { data } = await axios.get("/profile");
        setUser(data);
      };
      fetchProfile();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
