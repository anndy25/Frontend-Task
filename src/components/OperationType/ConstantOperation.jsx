import React, { useContext, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ArgumentContext } from "../../context/ArugumentContext";

export const ConstantOperations = ({
  onClickHandler,
  level,
  index,
  resultHandler,
  deleteOption
}) => {
  const { setResult } = useContext(ArgumentContext);

  useEffect(() => {
    if (level === 1) {
      setResult("false");
    } else {
      resultHandler("false", index);
    }
  }, []);

  const onChangeHandler = (event) => {
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
    <>
      <div className="flex">
        <select
          data-testid="constant-options"
          className="py-2 px-3 mr-2 border rounded-md outline-none"
          onChange={onChangeHandler}
        >
          <option value={false}>false</option>
          <option value={true}>true</option>
        </select>

        <button
          data-testid='constant-delete-btn'
          className="bg-red-100 p-2.5 rounded text-red-600 font-bold text-xl rounded-full hover:text-white hover:bg-red-600"
          onClick={onClick}

        >

          <MdOutlineDeleteOutline />
        </button>
      </div>
    </>
  );
};
