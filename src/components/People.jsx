import { usePeopleStore } from "../store";
import React from "react";

function People() {
  const people = usePeopleStore((state) => state.people);
  return (
    <div>
      <p>We have {people.length} in our DB</p>
      <ul>
        {people.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default People;
