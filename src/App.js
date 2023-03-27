import React from "react";
import { Arguments } from "./components/Arguments";
import { Operations } from "./components/Operations";
import { Result } from "./components/Result";
import { ContextProvider } from "./context/ArugumentContext";

import "./styles.css";

export default function App() {
  return (
    <ContextProvider>
      <div className="w-full min-h-screen flex justify-center  items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-serif ">
        <div>
          <div>
            <h1 className="text-white text-xl mb-2">Arguments :</h1>
            <Arguments />
          </div>
          <div className="my-6">
            <h1 className="text-white text-xl mb-2">Expression :</h1>
            <Operations />
          </div>
          <div>
            <Result />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}
