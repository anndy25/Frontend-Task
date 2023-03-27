import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ArgumentContext } from "../context/ArugumentContext";

export const Arguments = () => {
  const { addArguments, argumentList } = useContext(ArgumentContext);

  const addArgumentHandler = () => {
    addArguments([...argumentList, { key: "My Args", value: false }]);
  };

  const deleteArgumentHandler = (index) => {
    const filteredList = argumentList.filter((argument, i) => i !== index);
    addArguments(filteredList);
  };

  const handleInputChange = (event, key) => {
    const { value, name } = event.target;
    const updatedArgumentList = [...argumentList];
    updatedArgumentList[key][name] = value;
    addArguments(updatedArgumentList);
  };

  return (
    <>
  
      {argumentList.map((data, key) => {
        return (
          <div data-testid='argument-list' key={key} className="mt-1 flex" >
            <input
              type="text"
              className="border py-2 px-4 rounded-md outline-none "
              name="key"
              value={data.key}
              onChange={(event) => handleInputChange(event, key)}
            />
            <select
              
              className="ml-1 mr-2 border py-2 px-3 bg-slate-600 rounded-md outline-none text-white"
              name="value"
              value={data.value}
              onChange={(event) => handleInputChange(event, key)}
            >
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>
            <button
            data-testid='delete-btn'
              className="bg-red-100 p-3 rounded text-red-600 text-xl rounded-full font-bold hover:text-white hover:bg-red-600"
              onClick={() => {
                deleteArgumentHandler(key);
              }}
            >
              <MdOutlineDeleteOutline />
            </button>
          </div>
        );
      })}
      <button
        className="py-2 px-3 my-2 bg-indigo-600 text-white rounded-md flex"
        onClick={addArgumentHandler}
        name='add'
      >
        <MdAdd className="text-2xl" />
        <span>Add Args</span>
      </button>
    </>
  );
};
