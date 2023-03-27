import React, { useState, createContext } from "react";

const ArgumentContext = createContext();

const ContextProvider = ({ children }) => {
  const [argumentList, addArguments] = useState([
    { key: "My Args", value: "false" }
  ]);

  const [result, setResult] = useState("");

  return (
    <ArgumentContext.Provider
      value={{
        argumentList,
        addArguments,
        result,
        setResult
      }}
    >
      {children}
    </ArgumentContext.Provider>
  );
};

export { ContextProvider, ArgumentContext };
