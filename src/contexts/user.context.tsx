import React, { useEffect } from "react";
import { IUser } from "models/user.model";
import { createContext, useState } from "react";
import { clearToken, getToken, setToken } from "utils/token.util";
import { GetCurrentUser } from "services/auth.service";

export interface IUserContext {
  setCurrentUser: (user: IUser | null) => void;
  currentUser: IUser | null;
}

interface IUserProviderProps {
  children: React.ReactNode;
}
export const UserContext = createContext<IUserContext>({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    async function setCurrentLoggedUser() {
      const user = getToken()
        ? await GetCurrentUser()
            .then(res => res.json())
            .then(res => res.user)
            .catch(() => null)
        : null;
      setCurrentUser(user);
    }
    setCurrentLoggedUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      setToken(currentUser.token);
    } else {
      clearToken();
    }
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
