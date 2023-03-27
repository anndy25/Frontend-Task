import React, { useState } from "react";

import { ArgumentOptions } from "./ArgumentOptions";
import { ConstantOperations } from "./ConstantOperation";
import { LogicalOperations } from "./LogicalOperation";

export const GenralOptions = ({
  level,
  index,
  resultHandler,
  deleteOption
}) => {
  const [state, setState] = useState(4);

  const onClickHandler = (flag) => {
    setState(flag);
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setState(value);
  };

  if (state === "0") {
    return (

      <ConstantOperations
        onClickHandler={onClickHandler}
        level={level + 1}
        index={index}
        resultHandler={resultHandler}
        deleteOption={deleteOption}
      />

    );
  }

  if (state === "1") {
    return (

      <ArgumentOptions
        onClickHandler={onClickHandler}
        level={level + 1}
        index={index}
        resultHandler={resultHandler}
        deleteOption={deleteOption}
      />

    );
  }

  if (state === "2") {
    return (

      <LogicalOperations
        onClickHandler={onClickHandler}
        level={level + 1}
        index={index}
        resultHandler={resultHandler}
        deleteOption={deleteOption}
      />

    );
  }

  return (
    <>
      <select
        data-testid="general-options"
        className="border p-3  rounded-md outline-none block"
        onChange={onChangeHandler}
      >
        <option disabled selected>
          -- select a option --
        </option>
        <option value="0">Constant</option>
        <option value="1">Argument</option>
        <option value="2">Logical Operation</option>
      </select>
    </>
  );
};
