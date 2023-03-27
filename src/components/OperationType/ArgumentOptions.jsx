import React, { useContext, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ArgumentContext } from "../../context/ArugumentContext";

export const ArgumentOptions = ({
  onClickHandler,
  level,
  index,
  resultHandler,
  deleteOption
}) => {
  const { argumentList, setResult } = useContext(ArgumentContext);

  useEffect(() => {
    if (level === 1) {
      setResult(argumentList[0].value);
    } else {
      resultHandler(argumentList[0].value, index);
    }
  }, []);

  const OnChangeHandler = (event) => {
    const { value } = event.target;
    if (level === 1) {
      setResult(value);
    } else {
      resultHandler(value, index);
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
    <div className="flex">
      <select
        className="mr-2 border py-2 px-3  rounded-md outline-none "
        data-testid="argument-options"
        onChange={OnChangeHandler}
      >
        {argumentList.map((args, key) => {
          return (
            <option value={args.value} key={key}>
              {args.key}
            </option>
          );
        })}
      </select>

      <button
        data-testid='argument-delete-btn'
        className="bg-red-100 p-3 rounded text-red-600 text-xl rounded-full hover:text-white hover:bg-red-600"
        onClick={onClick}
      >
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );
};
