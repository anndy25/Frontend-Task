import React, { useContext, useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";

import { ArgumentContext } from "../../context/ArugumentContext";

import { GenralOptions } from "./GenralOptions";

export const LogicalOperations = ({
  onClickHandler,
  level,
  index,
  resultHandler,
  deleteOption
}) => {
  const [options, setOptions] = useState([0, 1]);
  const [flags, setFlags] = useState({});
  const [operator, setOperator] = useState("and");

  const { setResult } = useContext(ArgumentContext);

  const expressionResult = () => {
    if (Object.keys(flags).length === 0) return "";

    for (const ind in flags) {
      if (operator === "and") {
        if (flags[ind] === "false") return "false";
      } else if (flags[ind] === "true") return "true";
    }
    if (operator === "and") return "true";
    return "false";
  };

  useEffect(() => {
    let result = expressionResult();
    if (level === 1) {
      setResult(result);
    }
  }, [operator]);

  const stateHandler = (state, index) => {
    let obj = flags;
    obj[index] = state;
    setFlags(obj);
    let result = expressionResult();
    if (level === 1) {
      setResult(result);
    } else {
      resultHandler(result, index);
    }
  };

  const onAddHandler = () => {
    setOptions([...options, 1]);
  };

  const onDeleteState = (index) => {
    let obj = flags;
    delete obj[index];
    setFlags(obj);
    let result = expressionResult();
    if (level === 1) {
      setResult(result);
    }
  };

  const onClick = () => {
    onClickHandler("4");
    if (level === 1) {
      setResult("");
    } else {
      deleteOption(index);
    }
  };

  return (
    <>
      <div className="flex">
        <select
          data-testid="logical-operations"
          className="mr-2 border py-2 px-3  rounded-md outline-none "
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="and">And</option>
          <option value="or">or</option>
        </select>
        <button
          className="bg-red-100 p-3 rounded text-red-600 text-xl rounded-full hover:text-white hover:bg-red-600"
          onClick={onClick}
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
      <div className="ml-6 my-2">
        {options.map((value, key) => {
          return (
            <div className="mt-1" key={key}>
              <GenralOptions
                level={level}
                index={key}
                resultHandler={stateHandler}
                deleteOption={onDeleteState}
              />
            </div>
          );
        })}

        <button
          className="px-3 py-2 my-2 bg-indigo-600 text-white rounded-md flex"
          onClick={onAddHandler}
        >
          <MdAdd className="text-2xl" />
          <span>Add Option</span>
        </button>
      </div>
    </>
  );
};
