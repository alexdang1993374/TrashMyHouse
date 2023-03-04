import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserContextProviderProps {
  children: React.ReactElement;
}

interface IUser {
  _id: string;
  email: string;
  name: string;
  iat: number;
}

interface IInitialState {
  user: IUser | null;
  ready: boolean;
}

const initialState: IInitialState = {
  user: null,
  ready: false,
};

interface IContextValue {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  ready: boolean;
  setReady: (value: boolean) => void;
}

export const UserContext = createContext<IContextValue>({
  user: initialState.user,
  setUser: () => {},
  ready: initialState.ready,
  setReady: () => {},
});

export const UserContextProvider = ({
  children,
}: IUserContextProviderProps) => {
  const [user, setUser] = useState(initialState.user);
  const [ready, setReady] = useState(initialState.ready);

  useEffect(() => {
    if (!user) {
      const fetchProfile = async () => {
        const { data } = await axios.get("/profile");
        setUser(data);
        setReady(true);
      };
      fetchProfile();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready, setReady }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
