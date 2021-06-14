import React, { useRef } from "react";
import { usePeopleStore } from "../store";

function Input() {
  const inputRef = useRef();
  const addPerson = usePeopleStore((state) => state.addPerson);
  const add = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="inputBg">
      <input className="inputPerson" type="text" ref={inputRef} />
      <button className="addPerson" onClick={add}>Add Person</button>
    </div>
  );
}

export default Input;
