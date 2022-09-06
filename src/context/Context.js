import { createContext, useMemo, useState } from "react";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(false);
  const [userToken, setUserToken] = useState(false);
  const value = useMemo(
    () => ({ userData, setUserData, userToken, setUserToken }),
    [userData, userToken]
  );
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export { StateContext, ContextProvider };
