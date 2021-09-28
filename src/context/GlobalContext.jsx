import React, { useContext, createContext, useReducer } from "react";
import { products } from "../Products";
import { GlobalReducer } from "./GlobalReducer";

const GlobalContext = createContext();
const GlobalDispatch = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    products: products,
  });
  return (
    <GlobalContext.Provider value={state}>
      <GlobalDispatch.Provider value={dispatch}>
        {children}
      </GlobalDispatch.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalDispatch = () => useContext(GlobalDispatch);
