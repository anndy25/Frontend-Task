import React, { useContext } from "react";
import { ArgumentContext } from "../context/ArugumentContext";

export const Result = () => {
  const { result } = useContext(ArgumentContext);
  return (
    <div>
      <span className="text-white text-xl" >Result : {result}</span>
    </div>
  );
};
