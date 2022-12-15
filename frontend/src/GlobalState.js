import React, { createContext, useEffect, useState } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [loginstate, setLoginstate] = useState(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin === true) {
      setLoginstate(true);
    } else {
      setLoginstate(false);
    }
  }, []);

  const state = {
    loginstate: [loginstate, setLoginstate],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
